import { Download } from 'lucide-react'

const ResumeDownload = () => {
  return (
    <div className="text-center pt-4">
      <a
        href="https://docs.google.com/document/d/1sT5YObltRPaT6Z-iD0TDsFmtju6BK8us9URNgoXTK9M/export?format=pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold underline hover:no-underline transition hover:scale-105 focus-visible:outline focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
      >
        <Download size={18} /> Download Resume (PDF)
      </a>
    </div>
  )
}

export default ResumeDownload
