export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-black text-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="assets/andbrew.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-8xl font-bold">I'm AndBrew</h1>
          <p className="py-6">
            Welcome to my portfolio website! My name is Andres Romero and I am a
            recent graduate in Computer Science from Universidad Autónoma de
            Chihuahua.
          </p>
          <p>
            Throughout my studies, I have developed a strong foundation in
            computer science concepts and skills, including imperative
            programming, algorithm analysis, database design, linux basics,
            version control, web development, container leveraging, and machine
            learning engineering.
          </p>
        </div>
      </div>
    </div>
  );
};
