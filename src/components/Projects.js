import { AiFillGithub } from "react-icons/ai";
import Text from "./Aboutme";

const ProjectsCard = () => {
  const projects = [
    {
      name: "Lottery-eth Dapp",
      languages: "JavaScript, Solidity, Hardhat",
      image: "/images/ethereum.png",
    },
    {
      name: "cardano-wallet-connect-tx",
      languages:
        "JavaScript, cardano-serialization-lib NEED TO UPDATE DUE TO VASIL HARDFORK",
      image: "/images/cardano.png",
    },
    {
      name: "eth-nft-parser",
      languages: "JavaScript",
      image: "/images/hardhat.png",
    },
  ];
  const internships = [
    {
      name: "Software Developer Intern",
      company: "PetroIT",
      skills: "JavaScript, Solidity, Hardhat",
      image: "/images/petroit.jpeg",
    },
    {
      name: "Software Developer Intern",
      company: "SnapBrillia",
      skills: "JavaScript, Solidity, Hardhat",
      image: "/images/snapbrillia.jpeg",
    },
  ];
  return (
    <>
      <Text statement="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 m-10 text-white ">
        {projects.map((data) => {
          return (
            <div className="flex flex-col transition  rounded-2xl hover:scale-110 bg-gradient-to-r from-violet-900 to-fuchsia-900 bg-opacity-40 mt-0 m-5 p-10">
              <p className="text-xl font-bold mb-2">{data.name}</p>
              <img
                src={data.image}
                className="w-[300px] h-[180px] rounded-lg mb-2"
              ></img>

              <p>Skills: {data.languages}</p>
              <AiFillGithub className="hover:animate-spin text-5xl mt-3" />
            </div>
          );
        })}
      </div>
      <Text statement="Internships" />
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 m-10 text-white ">
        {internships.map((data) => {
          return (
            <div className="flex flex-col transition  rounded-2xl hover:scale-110 bg-gradient-to-r from-violet-900 to-fuchsia-900 bg-opacity-40 mt-0 m-5 p-10">
              <p className="text-xl font-bold mb-2">{data.name}</p>
              <img
                src={data.image}
                className="w-[200px] h-[200px] rounded-lg mb-2"
              ></img>

              <p>Skills: {data.skills}</p>
              <AiFillGithub className="hover:animate-spin text-5xl mt-3" />
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
