import styles from "./OurPartners.css";

const partners = [
  { src: "/business_partners/alphabet-logo.png", alt: "Alphabet logo" },
  { src: "/business_partners/amazon_logo.png", alt: "Amazon logo" },
  { src: "/business_partners/CBC_Logo_White.png", alt: "CBC logo" },
  { src: "/business_partners/Microsoft-Logo-white.png", alt: "Microsoft logo" },
  { src: "/business_partners/nyu-logo.png", alt: "NYU logo" },
  { src: "/business_partners/QueensLogo_white.png", alt: "Queens logo" },
  { src: "/business_partners/samsung-logo.png", alt: "Samsung logo" },
  { src: "/business_partners/sodexo-logo.png", alt: "Sodexo logo" },
];

const OurPartners = () => {
  return (
    <section className="partners-section">
      <p className="section-text">
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="partner-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
