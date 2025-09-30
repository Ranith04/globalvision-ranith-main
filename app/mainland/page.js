export const metadata = {
  title: 'Mainland Business Setup in the UAE | Global Vision UAE',
  description: 'Explore mainland company setup across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, UAQ, and Fujairah. Get licensing, visas, and PRO support.',
};

export default function MainlandLanding() {
  return (
    <main className="landing">
      <section className="landing-hero" style={{ padding: '56px 16px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: 12 }}>Mainland Business Setup in the UAE</h1>
        <p style={{ maxWidth: 820, margin: '0 auto' }}>
          Choose your emirate to get started, or contact us for a tailored plan.
        </p>
        <div style={{ marginTop: 20 }}>
          <a href="#contact" className="btn primary">Speak to an Advisor</a>
        </div>
      </section>
      <section className="landing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, padding: '0 16px 56px' }}>
        <a className="landing-card" href="/mainland/dubai">Dubai Mainland</a>
        <a className="landing-card" href="/mainland/abu-dhabi">Abu Dhabi Mainland</a>
        <a className="landing-card" href="/mainland/sharjah">Sharjah Mainland</a>
        <a className="landing-card" href="/mainland/ajman">Ajman Mainland</a>
        <a className="landing-card" href="/mainland/rak">RAK Mainland</a>
        <a className="landing-card" href="/mainland/uaq">UAQ Mainland</a>
        <a className="landing-card" href="/mainland/fujairah">Fujairah Mainland</a>
      </section>
    </main>
  );
}


