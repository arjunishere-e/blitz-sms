import "../styles/expertsbrands.css";

const experts = [
  {
    name: "Klaudia Fischer",
    role: "Chief Marketing Officer",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Derrick Chan",
    role: "Product Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Sofia Gomez",
    role: "Customer Success Manager",
    image:
      "https://img.freepik.com/free-photo/portrait-charming-young-woman-with-blind-hair-dressed-cashmere-sweater-woman-sits-beach-enjoys-spring-day_197531-12434.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Marco Lee",
    role: "Lifecycle Strategist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Priya Patel",
    role: "Growth Manager",
    image:
      "https://images.unsplash.com/photo-1519419691348-3b3433c4c20e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbiUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Jonas Meyer",
    role: "Data Analyst",
    image:
      "https://pbblogassets.s3.amazonaws.com/uploads/2015/11/4k-uncropped.jpg",
  },
  {
    name: "Amira Hassan",
    role: "Automation Lead",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Leo Alvarez",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
  },
];

const brands = [
  { name: "NUWA", variant: "solid" },
  { name: "TOPDUTCH", variant: "dashed" },
  { name: "NOM", variant: "solid" },
  { name: "NIEMEIJER", variant: "dashed" },
  { name: "WTBE", variant: "solid" },
  { name: "PROVINCIE GRONINGEN", variant: "dashed" },
];

const testimonials = [
  {
    quote:
      "Our platform has evolved in sync with our growing customer base. It smoothly handles the increase in traffic and messages without any interruptions.",
    name: "Linda D. Swenson",
    title: "CEO, Retail Magic",
    tint: "#1e96ff",
  },
  {
    quote:
      "Our platform has seamlessly grown alongside our expanding customer base. It effortlessly manages traffic and messages without hiccups.",
    name: "Parker P. Mitchell",
    title: "CEO, Retail Magic",
    tint: "#ff7a30",
  },
  {
    quote:
      "Overall, the platform is impressive, but additional customization options for templates and reports would be appreciated.",
    name: "Effie H. King",
    title: "CEO, Retail Magic",
    tint: "#6b5bff",
  },
];

const ExpertsBrands = () => {
  return (
    <section className="experts-brands">
      <div className="experts-block">
        <div className="experts-head">
          <div>
            <p className="eyebrow">Our SMS Experts</p>
            <h3>Meet the People Who Know SMS</h3>
          </div>
          <p className="experts-copy">
            Our team of seasoned SMS marketing experts brings years of
            experience to the table. They are dedicated to helping businesses
            achieve exceptional results.
          </p>
        </div>

        <div className="experts-carousel">
          <div className="experts-track">
            {[...experts, ...experts].map((expert, idx) => (
              <div className="expert-card" key={idx}>
                <img src={expert.image} alt={expert.name} />
                <div className="expert-info">
                  <div>
                    <h4>{expert.name}</h4>
                    <span>{expert.role}</span>
                  </div>
                  <button aria-label="Profile">→</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="brands-block">
        <div className="brands-head">
          <div>
            <h3>Delivering Results for Leading Brands</h3>
          </div>
          <p className="brands-copy">
            We deliver impactful SMS marketing solutions that help leading
            brands boost engagement and drive conversions. Our platform ensures
            seamless communication, maximizing results for every campaign.
          </p>
        </div>

        <div className="brands-grid">
          {brands.map((brand, i) => (
            <div
              className={`brand-card ${
                brand.variant === "dashed"
                  ? "brand-card--dashed"
                  : "brand-card--solid"
              }`}
              key={i}
            >
              <span className="brand-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-block">
        <div className="testimonials-head">
          <div>
            <h3>Discover the Impact We&apos;ve Created</h3>
          </div>
          <div className="testimonials-copy">
            <p>
              See for yourself. Discover success stories from happy customers
              who have revolutionized their marketing approaches and experienced
              impressive expansion with our SMS platform.
            </p>
            <button className="view-all">View All</button>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              <div className="quote-mark" style={{ color: item.tint }}>
                “
              </div>
              <p className="testimonial-text">{item.quote}</p>
              <div className="testimonial-footer">
                <div className="avatar" style={{ background: item.tint }} />
                <div>
                  <div className="t-name">{item.name}</div>
                  <div className="t-title">{item.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsBrands;
