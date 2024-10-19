import ReactImg from "../../assets/Logo/React.png";
import NextImg from "../../assets/Logo/Next.js.png";
import TailwindImg from "../../assets/Logo/TailwindCSS.png";
import NodeImg from "../../assets/Logo/Node.js.png";
import ExpressImg from "../../assets/Logo/Express.png";
import MongodbImg from "../../assets/Logo/MongoDB.png";
import MongooseImg from "../../assets/Logo/Mongoose.js.png";
import JSImg from "../../assets/Logo/JavaScript.png";
import TSImg from "../../assets/Logo/TypeScript.png";
import PythonImg from "../../assets/Logo/Python.png";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold font-roboto-slab border-b-2 pb-2">
          My Toolkit
        </h1>
        {/* Skills container */}
        <div className="mt-6 space-y-6">
          {/* -------Font-End----- */}
          <div>
            <h6 className="text-xl font-semibold mb-3">FONT-END:</h6>
            <div className="*:w-16 flex gap-3 flex-wrap items-center">
              <img
                src={ReactImg}
                data-tooltip-id="react"
                data-tooltip-content="React"
              />
              <Tooltip id="react" />
              <img
                src={NextImg}
                data-tooltip-id="next"
                data-tooltip-content="NEXT JS"
              />
              <Tooltip id="next" />
              <img
                src={TailwindImg}
                data-tooltip-id="tailwind"
                data-tooltip-content="TAILWINDCSS"
              />
              <Tooltip id="tailwind" />
            </div>
          </div>
          {/* -------Back-End----- */}
          <div>
            <h6 className="text-xl font-semibold mb-3">BACK-END:</h6>
            <div className="*:w-16 flex gap-3 flex-wrap items-center">
              <img
                src={NodeImg}
                alt=""
                data-tooltip-id="node"
                data-tooltip-content="Node JS"
              />
              <Tooltip id="node" />
              <img
                src={ExpressImg}
                alt=""
                data-tooltip-id="express"
                data-tooltip-content="Express JS"
              />
              <Tooltip id="express" />
            </div>
          </div>
          {/* -------Database----- */}
          <div>
            <h6 className="text-xl font-semibold mb-3">DATABASE:</h6>
            <div className="*:w-16 flex gap-3 flex-wrap items-center">
              <img
                src={MongodbImg}
                alt=""
                data-tooltip-id="mongodb"
                data-tooltip-content="MongoDB"
              />
              <Tooltip id="mongodb" />
            </div>
          </div>
          {/* -------ORM/ODM----- */}
          <div>
            <h6 className="text-xl font-semibold mb-3">ORM/ODM:</h6>
            <div className="*:w-16 flex gap-3 flex-wrap items-center">
              <img
                src={MongooseImg}
                alt=""
                data-tooltip-id="mongoose"
                data-tooltip-content="Mongoose(ODM)"
              />
              <Tooltip id="mongoose" />
            </div>
          </div>
          {/* -------Languages----- */}
          <div>
            <h6 className="text-xl font-semibold mb-3"> LANGUAGES:</h6>
            <div className="*:w-16 flex gap-3 flex-wrap items-center">
              <img
                src={JSImg}
                alt=""
                data-tooltip-id="javascript"
                data-tooltip-content="JavaScript"
              />
              <Tooltip id="javascript" />
              <img
                src={TSImg}
                alt=""
                data-tooltip-id="typescript"
                data-tooltip-content="TypeScript"
              />
              <Tooltip id="typescript" />
              <div className="flex items-end">
                <img
                  src={PythonImg}
                  alt=""
                  data-tooltip-id="python"
                  data-tooltip-content="Python(Basic)"
                />{" "}
                <span>(Basic)</span>
              </div>
              <Tooltip id="python" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
