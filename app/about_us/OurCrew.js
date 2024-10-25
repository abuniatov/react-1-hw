import "./OurCrew.css";

const crewMembers = [
  {
    name: "Captain Sarah Vega",
    photo: "/crew/image-anousheh-ansari.png",
    alt: "photo of Sarah Vega",
    description:
      "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
  },
  {
    name: "Chief astrophysicist Dr. Leo Redding",
    photo: "/crew/image-douglas-hurley.png",
    alt: "photo of Dr. Leo Redding",
    description:
      "Dr. Redding is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
  },
  {
    name: "Chief Engineer Hana Lee",
    photo: "/crew/image-victor-glover.png",
    alt: "photo of Hana Lee",
    description:
      "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
  },
  {
    name: "Mission Specialist Alex Santos",
    photo: "/crew/image-mark-shuttleworth.png",
    alt: "photo of Alex Santos",
    description:
      "As a mission specialist, Alex's job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
  },
  {
    name: "Crew Member Maya Patel",
    photo: "/crew/image-anousheh-ansari.png",
    alt: "photo of Maya Patel",
    description:
      "Maya brings a unique blend of technical skills and customer service experience to the team. She's always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
  },
];

const OurCrew = () => {
  return (
    <section className="crew-section">
      <p className="section-text">
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <div className="crew-grid">
        {crewMembers.map((member, index) => (
          <div className="crew-member" key={index}>
            <img src={member.photo} alt={member.alt} className="crew-photo" />
            <h4 className="crew-title">{member.name}</h4>
            <p className="crew-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCrew;
