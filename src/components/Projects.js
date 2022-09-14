import { AiFillGithub } from "react-icons/ai";
import Text from "./Aboutme";

const ProjectsCard = () => {
  const projects = [
    {
      name: "Lottery-eth Dapp",
      languages:
        "This is a project where I had created on-chain Solidity scripts and connected them to the front-end using Hardhat and javascript. This project just randomly selects an integer number and if you guess the number right u get the price in eth in your wallet (on the testnet).",
      image: "/images/ethereum.png",
      link: "https://github.com/jay-esh/Lottery-eth",
    },
    {
      name: "cardano-wallet-connect-tx",
      languages:
        "In this project I created a script in javascript using Cardano serialisation library which allows the user to transfer ADA to and from wallets and scripts, NEED TO UPDATE THIS PROJECT BECAUSE OF THE VASIL HARDFORK.",
      image: "/images/cardano.png",
      link: "https://github.com/jay-esh/cardano-wallet-connect-tx",
    },
    {
      name: "eth-nft-parser",
      languages:
        "This is my first ever project related to the blockchain space, where I just display the information about NFTs present in the connected wallet on the front-end.",
      image: "/images/hardhat.png",
      link: "https://github.com/jay-esh/eth-nft-parser",
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
