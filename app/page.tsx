import { ArrowRight, CalendarDays, Leaf, MapPin, Utensils, Sparkles } from "lucide-react";

const featured = [
  { name: "Kurinji Millet Thali", note: "Seasonal millet spread · 12 dishes", price: "₹1,250" },
  { name: "Forest Pepper Pongal", note: "Native pepper · ghee-roasted cashews", price: "₹420" },
  { name: "Nilgiri Mango Payasam", note: "Alphonso · coconut cream · cardamom", price: "₹360" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroGlow" />
        <nav className="nav">
          <a className="brand" href="/">MAHISTRA</a>
          <div className="navLinks">
            <a href="#experience">Experience</a>
            <a href="#menu">Menu</a>
            <a href="#story">Our story</a>
            <a href="#contact">Visit</a>
          </div>
          <a className="reserve" href="#reservation">Reserve a table <ArrowRight size={15} /></a>
        </nav>

        <div className="heroContent">
          <div className="eyebrow"><Leaf size={15} /> Ooty · Tamil Nadu</div>
          <h1>Where the hills<br /><em>meet the table.</em></h1>
          <p>
            A quiet, modern expression of South Indian cooking, shaped by misty mornings,
            mountain produce, and recipes worth remembering.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#menu">Explore the menu <ArrowRight size={16} /></a>
            <a className="ghostBtn" href="#reservation">Book an evening</a>
          </div>
        </div>

        <div className="heroMeta">
          <span>01 / 03</span>
          <span className="line" />
          <span>Nature · Fire · Memory</span>
        </div>
      </section>

      <section id="experience" className="intro section">
        <div className="sectionKicker"><Sparkles size={14} /> THE MAHISTRA EXPERIENCE</div>
        <div className="introGrid">
          <h2>A table inspired<br />by the <em>Nilgiris.</em></h2>
          <div>
            <p className="lead">
              Mahistra is imagined as a destination dining room in Ooty — intimate, warm,
              and deeply rooted in South Indian ingredients.
            </p>
            <div className="miniStats">
              <div><strong>12</strong><span>course tasting</span></div>
              <div><strong>48</strong><span>seat dining room</span></div>
              <div><strong>04</strong><span>seasonal menus</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu section">
        <div className="sectionHead">
          <div>
            <div className="sectionKicker"><Utensils size={14} /> FROM THE KITCHEN</div>
            <h2>Signature <em>plates.</em></h2>
          </div>
          <a href="#full-menu" className="textLink">View all dishes <ArrowRight size={15} /></a>
        </div>
        <div className="dishGrid">
          {featured.map((dish, i) => (
            <article className="dishCard" key={dish.name}>
              <div className={"dishImage dish" + (i + 1)}><span>0{i + 1}</span></div>
              <div className="dishCopy">
                <div><h3>{dish.name}</h3><p>{dish.note}</p></div>
                <strong>{dish.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="story section">
        <div className="storyVisual">
          <div className="storyCircle">M</div>
          <span>Crafted slowly.<br />Served warmly.</span>
        </div>
        <div className="storyCopy">
          <div className="sectionKicker"><Leaf size={14} /> OUR STORY</div>
          <h2>Not a restaurant.<br /><em>A sense of place.</em></h2>
          <p>
            From native millets and estate vegetables to wood-smoked spices, every dish
            is designed to feel unmistakably of the hills.
          </p>
          <a href="#reservation" className="textLink">Discover Mahistra <ArrowRight size={15} /></a>
        </div>
      </section>

      <section id="reservation" className="reservation section">
        <div className="reservationPanel">
          <div>
            <div className="sectionKicker"><CalendarDays size={14} /> RESERVATIONS</div>
            <h2>Your evening<br /><em>starts here.</em></h2>
            <p>Friday–Sunday · 6:30 PM–10:30 PM<br />Limited seating · Reservations recommended</p>
          </div>
          <div className="bookingCard">
            <div className="bookingRow"><span>Guests</span><b>2 people</b></div>
            <div className="bookingRow"><span>Date</span><b>Choose a date</b></div>
            <div className="bookingRow"><span>Time</span><b>7:30 PM</b></div>
            <button>Find a table <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div>
          <a className="brand" href="/">MAHISTRA</a>
          <p>Premium South Indian dining<br />in the Nilgiris.</p>
        </div>
        <div className="footerInfo">
          <div><MapPin size={15} /> Ooty, Tamil Nadu, India</div>
          <div>Open Friday–Sunday evenings</div>
        </div>
        <span className="footerMark">© 2026 MAHISTRA</span>
      </footer>
    </main>
  );
}