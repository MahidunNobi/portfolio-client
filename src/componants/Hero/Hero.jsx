import { RoughNotation } from "react-rough-notation";
import profileImg from "../../assets/Profile.png";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="container mx-auto px-3 flex justify-between flex-col-reverse md:flex-row my-16 items-center md:items-start gap-6 md:gap-20">
      {/* -----------Left-------- */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-semibold font-roboto-slab">
          MD. Mahidun Nobi
        </h1>
        <h6 className="font-medium">Web Developer</h6>
        <p className=" leading-relaxed">
          I started my web development journey a few years ago through
          self-paced YouTube tutorials. After starting my{" "}
          <div className="inline-block">
            <RoughNotation type="highlight" show={true} color="#a7fc9f">
              freelancing career on Upwork in 2023 , I
            </RoughNotation>
          </div>
          realized the importance of joining a supportive community to further
          develop my skills and advance my career. Alongside freelancing on
          Upwork, I joined Programming Hero, where I spent six months mastering
          the fundamentals and some advanced concepts of both{" "}
          <div className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#FFBD73"
              animationDelay={800}
            >
              front-end
            </RoughNotation>
          </div>{" "}
          (espacially) and{" "}
          <div className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#fae996"
              animationDelay={1600}
            >
              back-end
            </RoughNotation>
          </div>{" "}
          development.
          <br /> <br />
          Through these experiences, I had the opportunity to work on both small
          and large web applications with different teams across the world in{" "}
          <div className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#f6ccff"
              animationDelay={2400}
              multiline
            >
              different time zones
            </RoughNotation>
          </div>{" "}
          which helped me develop a working style that leans toward{" "}
          <div className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#a7fc9f"
              animationDelay={4000}
            >
              flexibility
            </RoughNotation>
          </div>{" "}
          ,{" "}
          <div className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#fae996"
              animationDelay={4800}
            >
              clarity
            </RoughNotation>
          </div>{" "}
          , and{" "}
          <div className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#FFBD73"
              animationDelay={5600}
            >
              collaboration
            </RoughNotation>
          </div>{" "}
          .
          <br /> <br />
          Currently, I&apos;m looking for a full-time developer role.🙂
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <button className="w-full md:w-auto bg-gray-700 border-2 border-gray-700 text-white px-9 rounded-md py-3 hover:border-gray-900 hover:bg-gray-900 duration-200">
            View Linkedin
          </button>

          <button className="w-full md:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white duration-200 px-9 rounded-md py-3 flex items-center justify-center gap-3 ">
            Resume <FaDownload size={18} />
          </button>
        </div>
      </div>
      {/* ---------Right--------- */}
      <div>
        <div className="w-64 h-64 rounded-lg overflow-hidden bg-gray-200">
          <img src={profileImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
