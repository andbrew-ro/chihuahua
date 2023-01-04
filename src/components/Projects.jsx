const FEED_LENGTH = 3;

function grid(items) {
  const feed = [];
  for (let i = 0; i < items.length; i++) {
    if (i % FEED_LENGTH === 0) feed.push([]);
    feed[Math.floor(i / FEED_LENGTH)].push(items[i]);
  }
  return feed;
}

export const Projects = () => {
  const projects = [
    {
      title: "firenze",
      new: false,
      description: "A simple anagram validator written in C",
      image: {
        path: "/assets/projects/firenze.jpg",
        alt: "Florence",
      },
      skills: ["C"],
      url: "https://github.com/andbrew-ro/firenze",
    },
    {
      title: "new-york",
      new: false,
      description: "Web API built with Nest for anagrams",
      image: {
        path: "/assets/projects/new-york.jpg",
        alt: "New York",
      },
      skills: ["TypeScript", "NestJS"],
      url: "https://github.com/andbrew-ro/new-york",
    },
    {
      title: "chihuahua",
      new: true,
      description: "Personal web portfolio",
      image: {
        path: "/assets/projects/chihuahua.jpg",
        alt: "Chihuahua",
      },
      skills: ["JavaScript", "React", "tailwindcss", "daisyUI"],
      url: "https://github.com/andbrew-ro/chihuahua",
    },
  ];

  return (
    <div className="hero min-h-screen bg-black text-white">
      <div className="flex-col">
        <h2 className="text-5xl pt-16 pb-8">Projects</h2>
        {grid(projects).map((row, i) => {
          return (
            <div key={"row_" + i} className="hero-content flex-col lg:flex-row">
              {row.map((project) => {
                return (
                  <a key={project.title} href={project.url}>
                    <div className="card w-96 bg-white shadow-xl text-black">
                      <figure>
                        <img src={project.image.path} alt={project.image.alt} />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          {project.title}
                          {project.new && (
                            <div className="badge badge-primary">NEW</div>
                          )}
                        </h2>
                        <p>{project.description}</p>
                        <div className="card-actions justify-end">
                          {project.skills.map((skill) => {
                            return (
                              <div
                                key={project.title + "_" + skill}
                                className="badge badge-outline"
                              >
                                {skill}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
