import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineFilePdf,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import Text from "./Aboutme";
import ProjectsCard from "./Projects";
const Content = () => {
  return (
    <>
      <Text statement="About Me" />
      <div className="flex flex-col justify-center mb-10 ml-10 mr-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-opacity-40 lg:ml-20 lg:mr-20 lg:mb-10 rounded-xl text-white md:flex-row">
        <img
          className="m-5 flex rounded-full transition hover:scale-110 md:h-80 md:w-80"
          src="/images/face.png"
          alt="my face"
        />
        <div className="text-2xl flex flex-col justify-between p-5 pb-10 lg:pt-20 lg:pb-20">
          <p className="font-extrabold text-3xl mb-4">Jayesh Anil</p>
          <p className="pb-5 md:pr-10">
            I am a Computer Science student at McMaster University. I am a
            continuous learner who is curious about something everytime. Always
            trying to be a better iteration of myself.
          </p>
          <div className="flex text-5xl lg:pr-80">
            <a href="https://github.com/jay-esh">
              <AiFillGithub className="transition hover:scale-110 pr-4" />
            </a>
            <a href="https://www.linkedin.com/in/jayesh-anil-57257421b/">
              <AiFillLinkedin className="transition hover:scale-110 pr-4" />
            </a>
            <a href="https://twitter.com/JayeshAnil1">
              <AiFillTwitterCircle className="transition hover:scale-110 pr-4" />
            </a>
            <a href="mailto:jayeshgps@gmail.com? subject = subject text">
              <AiFillMail className="transition hover:scale-110 pr-4" />
            </a>
            <a href="https://www.instagram.com/_.jae_e/">
              <AiOutlineInstagram className="transition hover:scale-110 pr-4" />
            </a>
          </div>
        </div>
      </div>
      <ProjectsCard />
    </>
  );
};

export default Content;
