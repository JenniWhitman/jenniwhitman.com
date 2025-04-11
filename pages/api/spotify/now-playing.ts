import type { NextApiRequest, NextApiResponse } from 'next'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing'
const RECENTLY_PLAYED_ENDPOINT =
  'https://api.spotify.com/v1/me/player/recently-played?limit=1'

const getAccessToken = async () => {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  })

  return res.json()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { access_token } = await getAccessToken()

  const nowPlaying = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (nowPlaying.status === 204 || nowPlaying.status > 400) {
    const recentlyPlayed = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }).then((r) => r.json())

    const track = recentlyPlayed.items[0].track

    return res.status(200).json({
      isPlaying: false,
      track: {
        title: track.name,
        artist: track.artists.map((a: any) => a.name).join(', '),
        album: track.album.name,
        albumImageUrl: track.album.images[0].url,
        url: track.external_urls.spotify,
      },
    })
  }

  const song = await nowPlaying.json()

  return res.status(200).json({
    isPlaying: song.is_playing,
    track: {
      title: song.item.name,
      artist: song.item.artists.map((a: any) => a.name).join(', '),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0].url,
      url: song.item.external_urls.spotify,
    },
  })
}
