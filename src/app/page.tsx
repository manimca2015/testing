import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

const kitchens = [
  {
    name: "Little Ember",
    kind: "FIRE & FLAME",
    description: "Smoky edges, bright sauces, extra napkins.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85",
    alt: "A sizzling spread of grilled food fresh from the barbecue",
    className: "kitchen-card--ember",
  },
  {
    name: "Slurp Club",
    kind: "NOODLES & BROTH",
    description: "A good bowl fixes a lot of things.",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
    alt: "A bowl of noodles topped with fresh herbs and vegetables",
    className: "kitchen-card--slurp",
  },
  {
    name: "Green Room",
    kind: "FRESH & CRUNCHY",
    description: "Big, colorful plates with a little snap.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=85",
    alt: "A colorful salad bowl with leafy greens and vegetables",
    className: "kitchen-card--green",
  },
];

export default function Home() {
  return (
    <div className="landing-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Market Club home">
          <span className="wordmark-stamp" aria-hidden="true" />
          <span>
            MARKET
            <br />
            CLUB
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#kitchens">The kitchens</a>
          <a href="#our-table">Our table</a>
          <a href="#visit">Find us</a>
        </nav>

        <a className="header-link" href="#kitchens">
          Come hungry <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy enter-up">
              <p className="eyebrow"><span /> THE NEIGHBORHOOD FOOD HALL</p>
              <h1 id="hero-title">
                Many kitchens.
                <br />
                <span>One happy table.</span>
              </h1>
              <p className="hero-description">
                A lively food hall for every craving, every kind of crew, and one more bite.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#kitchens">
                  Explore the kitchens <ArrowRight aria-hidden="true" size={17} />
                </a>
                <a className="text-link" href="#visit">
                  Plan a visit <ArrowDown aria-hidden="true" size={15} />
                </a>
              </div>
              <div className="hero-note">
                <span className="note-rule" />
                <span>Come as you are. Leave room for dessert.</span>
              </div>
            </div>

            <figure className="hero-image enter-image">
              <Image
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=90"
                alt="A generous shared meal spread across a table"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 56vw"
                className="cover-image"
              />
              <figcaption className="image-caption">
                <span>Pull up a chair</span>
                <ArrowUpRight aria-hidden="true" size={18} />
              </figcaption>
              <span className="image-index" aria-hidden="true">01 / 03</span>
            </figure>
          </div>
        </section>

        <div className="hall-ribbon" aria-label="Good food, good company, room for one more">
          <span>GOOD FOOD</span><i aria-hidden="true">*</i>
          <span>GOOD COMPANY</span><i aria-hidden="true">*</i>
          <span>ROOM FOR ONE MORE</span><i aria-hidden="true">*</i>
          <span>GOOD FOOD</span>
        </div>

        <section className="kitchens-section" id="kitchens" aria-labelledby="kitchens-title">
          <div className="section-intro">
            <p className="section-kicker">A LITTLE SOMETHING FOR EVERYONE</p>
            <h2 id="kitchens-title">Follow your appetite.</h2>
            <p>Pick a favorite, try something new, or make the table a tasting menu.</p>
          </div>

          <div className="kitchen-grid">
            {kitchens.map((kitchen, index) => (
              <article className={`kitchen-card ${kitchen.className}`} key={kitchen.name}>
                <div className="kitchen-photo">
                  <Image
                    src={kitchen.image}
                    alt={kitchen.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                    className="cover-image"
                  />
                  <span className="kitchen-number">0{index + 1}</span>
                </div>
                <div className="kitchen-info">
                  <div>
                    <p className="kitchen-kind">{kitchen.kind}</p>
                    <h3>{kitchen.name}</h3>
                    <p className="kitchen-description">{kitchen.description}</p>
                  </div>
                  <span className="kitchen-arrow" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="table-section" id="our-table" aria-labelledby="table-title">
          <div className="table-image">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85"
              alt="Warmly lit restaurant tables ready for a lively meal"
              fill
              sizes="(max-width: 760px) 100vw, 48vw"
              className="cover-image"
            />
            <span className="table-image-tag">STAY A WHILE</span>
          </div>
          <div className="table-copy">
            <span className="table-mark" aria-hidden="true">M</span>
            <h2 id="table-title">Your table.<br />Your kind of night.</h2>
            <p>
              Catch up over lunch, bring the whole crew, or make a date of dinner. There is always room to pull up a chair.
            </p>
            <a className="underlined-link" href="#visit">
              A place for the whole crew <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
        </section>

        <section className="visit-section" id="visit" aria-labelledby="visit-title">
          <div className="visit-copy">
            <p className="visit-kicker">YOUR NEXT GOOD MEAL IS CLOSER</p>
            <h2 id="visit-title">Meet us at the table.</h2>
          </div>
          <a
            className="button button-light"
            href="https://www.google.com/maps/search/food+hall+near+me"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin aria-hidden="true" size={17} /> Find your way here
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#top">MARKET CLUB</a>
        <p>Good things happen around a table.</p>
        <a href="#top" className="back-top">Back to the top <ArrowUpRight aria-hidden="true" size={15} /></a>
      </footer>
    </div>
  );
}
