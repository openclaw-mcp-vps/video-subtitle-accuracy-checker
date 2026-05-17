export default function Home() {
  const faqs = [
    {
      q: "Which subtitle formats are supported?",
      a: "We support SRT, VTT, and ASS/SSA formats. Upload your video alongside any of these subtitle files for instant analysis."
    },
    {
      q: "Which accessibility laws does this check compliance for?",
      a: "Reports cover ADA, Section 508, WCAG 2.1, and FCC captioning standards so you stay compliant across platforms."
    },
    {
      q: "How accurate is the transcription comparison?",
      a: "We use OpenAI Whisper for transcription, achieving over 95% word-error-rate accuracy, with per-segment timestamps highlighted in the report."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Accessibility Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Verify Auto-Generated<br />
          <span className="text-[#58a6ff]">Subtitle Accuracy</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Upload your video and subtitle file. We transcribe the audio with Whisper, compare it against your captions, and deliver a detailed compliance report in minutes.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🎙️", title: "Whisper Transcription", desc: "Industry-leading speech-to-text accuracy" },
          { icon: "📋", title: "Compliance Reports", desc: "ADA, Section 508, WCAG 2.1 & FCC checks" },
          { icon: "⚡", title: "Fast Processing", desc: "Results delivered in under 5 minutes" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-2">{f.icon}</div>
            <div className="text-white font-semibold text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited subtitle checks",
              "Whisper AI transcription",
              "ADA & WCAG compliance reports",
              "SRT, VTT, ASS format support",
              "Email delivery of reports",
              "Priority processing queue"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} SubtitleCheck. Built for content creators &amp; educators.
      </footer>
    </main>
  );
}
