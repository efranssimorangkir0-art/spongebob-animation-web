const featureCards = [
  {
    title: 'Bubble Pop',
    text: 'Floating bubbles make the whole ocean feel alive.',
    icon: '🫧',
  },
  {
    title: 'Happy Mood',
    text: 'Bright colors and cheerful motion keep the vibe playful.',
    icon: '😄',
  },
  {
    title: 'Bikini Energy',
    text: 'A fun coastal theme inspired by sea adventures.',
    icon: '🌊',
  },
];

export default function App() {
  return (
    <div className="page-shell">
      <div className="background-ocean">
        <span className="bubble bubble-1" />
        <span className="bubble bubble-2" />
        <span className="bubble bubble-3" />
        <span className="bubble bubble-4" />
        <span className="bubble bubble-5" />
      </div>

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">S</span>
          <span>SpongeBob</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#fun">Fun</a>
          <a href="#about">Story</a>
        </nav>
      </header>

      <main className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Bikini Bottom</p>
          <h1>
            Let the <span>ocean</span> bring the joy.
          </h1>
          <p className="description">
            A cheerful SpongeBob-inspired experience with playful motion,
            bouncy visuals, and a sunny underwater atmosphere.
          </p>

          <div className="actions">
            <button className="primary">Play Now</button>
            <button className="secondary">Watch Splash</button>
          </div>

          <div className="stats">
            <div>
              <strong>99%</strong>
              <span>Smile meter</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Bubble mode</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Good vibes</span>
            </div>
          </div>
        </div>

        <div className="character-scene" id="fun">
          <div className="shadow" />
          <div className="spongebob">
            <div className="body">
              <div className="eye left">
                <span className="pupil" />
              </div>
              <div className="eye right">
                <span className="pupil" />
              </div>
              <div className="nose" />
              <div className="mouth" />
              <div className="cheek left" />
              <div className="cheek right" />
            </div>

            <div className="arm left" />
            <div className="arm right" />
            <div className="leg left" />
            <div className="leg right" />
          </div>
        </div>
      </main>

      <section className="features" id="about">
        {featureCards.map((card) => (
          <article key={card.title} className="feature-card">
            <div className="icon-wrap">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
