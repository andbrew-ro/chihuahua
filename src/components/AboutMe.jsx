export const AboutMe = () => {
  return (
    <div
      className="hero min-h-screen text-white"
      style={{ backgroundImage: `url("assets/cmatrix.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl">About Me</h1>
          <p className="mb-5">
            I am excited to apply my knowledge and abilities to real-world
            problems and make a meaningful impact as a software developer.
          </p>
          <a href="assets/cv.pdf" download="Andres Romero">
            <button className="btn btn-primary">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
};
