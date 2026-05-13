export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For DevOps &amp; SRE Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Time your incident response<br />
          <span className="text-[#58a6ff]">against SLA targets</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Track every step of your incident runbook in real-time. Compare against SLA thresholds, spot bottlenecks instantly, and ship post-mortems with hard data.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $59/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No lock-in.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⏱', title: 'Real-time timers', desc: 'Per-step stopwatches tied to your runbook stages.' },
          { icon: '🎯', title: 'SLA comparison', desc: 'Instant red/green status vs. your defined SLA targets.' },
          { icon: '📊', title: 'Bottleneck reports', desc: 'Exportable reports showing where time is lost.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$59</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per team</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited incidents & runbooks',
              'Real-time SLA tracking',
              'Bottleneck analytics dashboard',
              'CSV/PDF report exports',
              'Slack & PagerDuty integrations',
              'Priority support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does SLA tracking work?',
              a: 'You define time budgets for each runbook step. The tracker measures actual elapsed time and flags any step that exceeds its budget in real-time.'
            },
            {
              q: 'Can I import our existing runbooks?',
              a: 'Yes. You can import runbooks from Markdown, Confluence, or PagerDuty runbook templates with a single click.'
            },
            {
              q: 'Is there a free trial?',
              a: 'We offer a 14-day free trial with full access. No credit card required to start.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Incident Runbook Time Tracker. All rights reserved.
      </footer>
    </main>
  )
}
