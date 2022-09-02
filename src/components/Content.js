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
      <div className="flex flex-col mb-20 ml-20 mr-20 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-opacity-40 lg:ml-20 lg:mr-20 lg:mb-10 rounded-xl text-white md:flex-row">
        <img
          className="m-5 rounded-full transition hover:scale-110 md:h-80 md:w-80"
          src="/images/face.png"
          alt="my face"
        />
        <div className="text-2xl flex flex-col justify-between p-5 pb-10 lg:pt-20 lg:pb-20">
          <p className="pb-5 md:pr-10">
            hey my name is Jayesh just making my new portfolio ovboebvovo
            vovboerbve voeujvboev evoebvoe vevouebove vebvoev evebovbev
            fewiuyfiwe fweobfow fweioubfow fwebfow fewbvfiwvf fiwevfiowf fowif
            fewgf9weuyfwef rfwefwefwev grgetrgwqefeb
          </p>
          <div className="flex text-5xl lg:pr-80">
            <a href="https://github.com/jay-esh">
              <AiFillGithub className="transition hover:scale-110 pr-4" />
            </a>
            <a href="https://www.linkedin.com/in/jayesh-anil-57257421b/">
              <AiFillLinkedin className="transition hover:scale-110 pr-4" />
            </a>
            <a href="https://twitter.com/">
              <AiFillTwitterCircle className="transition hover:scale-110 pr-4" />
            </a>
            <a href="mailto:jayeshgps@gmail.com? subject = subject text">
              <AiFillMail className="transition hover:scale-110 pr-4" />
            </a>
            <a href="https://www.instagram.com/">
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
