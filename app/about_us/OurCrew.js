import "./OurCrew.css";

const OurCrew = () => {
  return (
    <section className="crew-section">
      <p className="section-text">
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <div className="crew-grid">
        <div className="crew-member">
          <img
            src="/crew/image-anousheh-ansari.png"
            alt="photo of Sarah Vega"
            className="crew-photo"
          />
          <h4 className="crew-title">Captain Sarah Vega</h4>
          <p className="crew-description">
            A former NASA astronaut with over 15 years of experience, Captain
            Vega leads our missions with unparalleled expertise and a passion
            for space exploration.
          </p>
        </div>

        <div className="crew-member">
          <img
            src="/crew/image-douglas-hurley.png"
            alt="photo of Dr. Leo Redding"
            className="crew-photo"
          />
          <h4 className="crew-title">Chief astrophysicist Dr. Leo Redding</h4>
          <p className="crew-description">
            Dr. Redding, is a renowned scientist who has contributed to major
            space discoveries. He ensures that every journey is as educational
            as it is exhilarating.
          </p>
        </div>

        <div className="crew-member">
          <img
            src="/crew/image-victor-glover.png"
            alt="photo of Hana Lee"
            className="crew-photo"
          />
          <h4 className="crew-title">Chief Engineer Hana Lee</h4>
          <p className="crew-description">
            With her extensive background in aerospace engineering, Hana Lee is
            responsible for the state-of-the-art technology that powers our
            spacecraft. Her innovation ensures that our travelers are always in
            safe hands.
          </p>
        </div>

        <div className="crew-member">
          <img
            src="/crew/image-mark-shuttleworth.png"
            alt="photo of Alex Santos"
            className="crew-photo"
          />
          <h4 className="crew-title">Mission Specialist Alex Santos</h4>
          <p className="crew-description">
            As a mission specialist, Alex's job is to ensure that every aspect
            of the journey runs smoothly. With a background in both science and
            adventure tourism, Alex is the perfect guide for our space
            travelers.
          </p>
        </div>

        <div className="crew-member">
          <img
            src="/crew/image-anousheh-ansari.png"
            alt="photo of Maya Patel"
            className="crew-photo"
          />
          <h4 className="crew-title">Crew Member Maya Patel</h4>
          <p className="crew-description">
            Maya brings a unique blend of technical skills and customer service
            experience to the team. She's always ready to assist with any needs
            and to make sure every traveler has an unforgettable experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCrew;