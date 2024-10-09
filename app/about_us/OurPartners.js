import styles from "./OurPartners.css";

const OurPartners = () => {
  return (
    <section className="partners-section">
      <p className="section-text">
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <div className="partners-grid">
        <img
          src="/business_partners/alphabet-logo.png"
          alt="Alphabet logo"
          className="partner-logo"
        />
        <img
          src="/business_partners/amazon_logo.png"
          alt="Amazon logo"
          className="partner-logo"
        />
        <img
          src="/business_partners/CBC_Logo_White.png"
          alt="CBC logo"
          className="partner-logo"
        />
        <img
          src="/business_partners/Microsoft-Logo-white.png"
          alt="Partner 4"
          className="Microsoft logo"
        />
        <img
          src="/business_partners/nyu-logo.png"
          alt="NYU logo"
          className="partner-logo"
        />
        <img
          src="/business_partners/QueensLogo_white.png"
          alt="Queens logo"
          className="partner-logo"
        />
        <img
          src="/business_partners/samsung-logo.png"
          alt="Samsung logo"
          className="partner-logo"
        />
        <img
          src="/business_partners/sodexo-logo.png"
          alt="Sodexo logo"
          className="partner-logo"
        />
      </div>
    </section>
  );
};

export default OurPartners;