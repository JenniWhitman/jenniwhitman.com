import { Download } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const formats = [
  { label: 'PDF', value: 'pdf' },
  { label: 'DOCX', value: 'docx' },
  { label: 'TXT', value: 'txt' },
]

const ResumeDownload = () => {
  const [selectedFormat, setSelectedFormat] = useState('pdf')

  const baseUrl =
    'https://docs.google.com/document/d/13X4IaKD3RYtDqw5pNllHKuAZMvxzOSIKIYiBcnXpQTU/export'

  const handleDownload = async () => {
    toast.success(`Downloading as ${selectedFormat.toUpperCase()}...`)

    try {
      if (selectedFormat === 'pdf') {
        const res = await fetch(`${baseUrl}?format=${selectedFormat}`)
        if (!res.ok) throw new Error('Download failed.')

        const blob = await res.blob()
        const url = window.URL.createObjectURL(blob)

        const a = document.createElement('a')
        a.href = url
        a.download = `jenni-whitman-resume.${selectedFormat}`
        document.body.appendChild(a)
        a.click()
        a.remove()

        window.URL.revokeObjectURL(url)
        return
      }

      const res = await fetch(`${baseUrl}?format=${selectedFormat}`)
      if (!res.ok) throw new Error('Download failed.')

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = `jenni-whitman-resume.${selectedFormat}`
      document.body.appendChild(a)
      a.click()
      a.remove()

      window.URL.revokeObjectURL(url)
    } catch (err) {
      toast.error('Download failed. Google overlords hath said no.')
    }
  }



  return (
    <div className="text-center pt-4">
      <div className="inline-flex items-center gap-2">
        <span className="font-semibold text-[var(--primary)]">
          Download Resume
        </span>

        <select
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
          className="bg-transparent border border-[var(--primary)] rounded px-2 py-1 text-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
        >
          {formats.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>

        <button
          onClick={handleDownload}
          className="group inline-flex items-center justify-center border border-[var(--primary)] rounded p-1 text-[var(--primary)] transition focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)] hover:bg-[var(--primary)/15]"
        >
          <Download
            size={18}
            className="transition-colors group-hover:text-[var(--accent)]"
          />
        </button>
      </div>
    </div>
  )
}

export default ResumeDownload
