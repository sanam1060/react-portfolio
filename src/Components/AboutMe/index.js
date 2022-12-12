import profileImage from "../../assets/images/profile-photo.jpg";

function AboutMe() {
  return (
    <section className="container d-flex flex-column align-items-center">
      <img
        data-testid="profilePhoto"
        className="hero-img my-3"
        src={profileImage}
        alt="Sanam Ganjian"
      />
      <p data-testid="profilePhoto" className="fs-1 fw-semibold mb-0">
        Sanam Ganjian
      </p>
      <h6 data-testid="profileUserTitle" className="fw-semibold">
        Recently Graduated Full Stack Web Developer
      </h6>
      <p data-testid="profileUserDescription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  );
}

export default AboutMe;
