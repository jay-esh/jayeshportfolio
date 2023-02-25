import { AiFillGithub } from "react-icons/ai";
import Text from "./Aboutme";

const ProjectsCard = () => {
  const projects = [
    {
      name: "Autonomous Remote Control Car",
      languages:
        "I was always intrigued by how self driving cars work, so this is project is an attempt towards a self driving remote control car in a simulated environment.",
      image: "/images/AutonomousRC.jpg",
      link: "https://github.com/jay-esh/AutonomousRCC",
    },
    {
      name: "Handwritten Digit Recognition",
      languages:
        "My first ML project where I used the MNIST handwritten data to predict handwritten digits. This was a part of my DATASCI 2G03 course at McMaster University",
      image: "/images/Handwritten.png",
      link: "https://github.com/jay-esh/handwritten-digit-recognition-from-scratch",
    },
    {
      name: "Sentiment Analysis using NLP",
      languages:
        "I wanted to learning more about how natural language is processed by computers and I was also interested in learning about how stock investments are made, what a better way than making a project reads news headlines using NLP for making stock market prediction.",
      image: "/images/stock.png",
      link: "https://github.com/jay-esh/nlp-sentiment-analysis",
    },
  ];
  const internships = [
    {
      name: "Software Developer Intern",
      company: "PetroIT",
      skills:
        "During this internship I had implemented a CRUD API in C# and connected this API with the front-end using react and jQuery. ",
      image: "/images/petroit.jpeg",
    },
    {
      name: "Software Developer Intern",
      company: "SnapBrillia",
      skills:
        "In this internship I had created a few plutus scripts using Plutus and Haskell, I had also used javascript to connect the onchain scripts to the front-end.",
      image: "/images/snapbrillia.jpeg",
    },
  ];
  return (
    <>
      <Text statement="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 m-10 text-white ">
        {projects.map((data) => {
          return (
            <div className="flex flex-col transition  rounded-2xl hover:scale-110 bg-gradient-to-r from-violet-900 to-fuchsia-900 bg-opacity-40 mt-0 mb-4 p-10">
              <p className="text-xl font-bold mb-2">{data.name}</p>
              <img
                src={data.image}
                className="md:w-[300px] md:h-[180px] w-[200px] h-[110px] rounded-lg mb-2"
              ></img>

              <p>{data.languages}</p>
              <a href={data.link}>
                <AiFillGithub className="hover:animate-spin text-5xl mt-3" />
              </a>
            </div>
          );
        })}
      </div>
      <Text statement="Internships" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 m-10 text-white ">
        {internships.map((data) => {
          return (
            <div className="flex flex-col transition  rounded-2xl hover:scale-110 bg-gradient-to-r from-violet-900 to-fuchsia-900 bg-opacity-40 mt-0 mb-4 p-10">
              <p className="text-xl font-bold mb-2">{data.name}</p>
              <img
                src={data.image}
                className="md:w-[200px] md:h-[200px] w-[100px] h-[100px] rounded-lg mb-2"
              ></img>

              <p>{data.skills}</p>
            </div>
          );
        })}
      </div>
      <Text statement="Github Stats" />
      <div className="flex flex-col items-center m-5 mt-0 md:flex">
        <img src="https://github-readme-stats.vercel.app/api?username=jay-esh&show_icons=true&theme=synthwave" />
        <img
          className="mt-4"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=jay-esh&layout=compact&theme=synthwave"
        />
      </div>
    </>
  );
};

export default ProjectsCard;
