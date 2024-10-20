import { RoughNotation } from "react-rough-notation";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto px-3 flex justify-between flex-col-reverse md:flex-row mt-32 mb-16 items-center md:items-start gap-6 md:gap-20"
    >
      {/* -----------Left-------- */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-semibold font-roboto-slab">
          MD. Mahidun Nobi
        </h1>
        <h6 className="font-medium">Web Developer</h6>
        <p className=" leading-relaxed">
          I started my web development journey a few years ago through
          self-paced YouTube tutorials. After starting my{" "}
          <span className="inline-block">
            <RoughNotation type="highlight" show={true} color="#a7fc9f">
              freelancing career on Upwork in 2023
            </RoughNotation>
          </span>{" "}
          , I realized the importance of joining a supportive community to
          further develop my skills and advance my career. Alongside freelancing
          on Upwork, I joined Programming Hero, where I spent six months
          mastering the fundamentals and some advanced concepts of both{" "}
          <span className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#FFBD73"
              animationDelay={800}
            >
              front-end
            </RoughNotation>
          </span>{" "}
          (espacially) and{" "}
          <span className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#fae996"
              animationDelay={1600}
            >
              back-end
            </RoughNotation>
          </span>{" "}
          development.
          <br /> <br />
          Through these experiences, I had the opportunity to work on both small
          and large web applications with different teams across the world in{" "}
          <span className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#f6ccff"
              animationDelay={2400}
              multiline
            >
              different time zones
            </RoughNotation>
          </span>{" "}
          which helped me develop a working style that leans toward{" "}
          <span className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#a7fc9f"
              animationDelay={3200}
            >
              flexibility
            </RoughNotation>
          </span>{" "}
          ,{" "}
          <span className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#fae996"
              animationDelay={4000}
            >
              clarity
            </RoughNotation>
          </span>{" "}
          , and{" "}
          <span className="inline-block">
            <RoughNotation
              type="highlight"
              show={true}
              color="#FFBD73"
              animationDelay={4800}
            >
              collaboration
            </RoughNotation>
          </span>{" "}
          .
          <br /> <br />
          Currently, I&apos;m looking for a full-time developer role.🙂
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          {/* <FilledBtn label="View Linkedin" /> */}

          <a
            href="/resume.pdf"
            download="Mahidun.pdf"
            className="w-full md:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white duration-200 px-9 rounded-md py-3 flex items-center justify-center gap-3 "
          >
            Resume <FaDownload size={18} />
          </a>
        </div>
      </div>
      {/* ---------Right--------- */}
      <div>
        <div className="w-64 h-64 rounded-lg overflow-hidden bg-gray-200">
          <img src="https://ibb.co.com/T2qCqkV" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
