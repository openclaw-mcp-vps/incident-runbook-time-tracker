import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Runbook Time Tracker — Time your incident response against SLA targets',
  description: 'Track incident response times in real-time, compare against SLA targets, and identify bottlenecks. Built for DevOps and SRE teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9e617368-e675-46ad-afc9-0de1d0d717ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
