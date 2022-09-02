import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineFilePdf,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" bg-projectBackground bg-repeat-x bg-center rounded-xl w-full">
        <div className=" text-white flex flex-col items-center ">
          <p className="md:text-7xl mt-10 mb-10 text-6xl">Contact Me!</p>
          <div className="md:text-7xl mb-4 flex m-2 text-6xl">
            <a href="https://github.com/jay-esh">
              <AiFillGithub className="transition hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/jayesh-anil-57257421b/">
              <AiFillLinkedin className="transition hover:scale-110" />
            </a>
            <a href="https://twitter.com/">
              <AiFillTwitterCircle className="transition hover:scale-110" />
            </a>
            <a href="mailto:jayeshgps@gmail.com? subject = subject text">
              <AiFillMail className="transition hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/">
              <AiOutlineInstagram className="transition hover:scale-110" />
            </a>
          </div>
          <p className="text-xl mb-2">Website made with ❤️ by Jayesh Anil</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
