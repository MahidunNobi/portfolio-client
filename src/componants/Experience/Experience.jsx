import { RoughNotation } from "react-rough-notation";
import Title from "../Shared/Title";
import FilledBtn from "../Shared/FilledBtn";

const Experience = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto">
        <Title title="Work History" />
        <div className="space-y-3 mt-6">
          <h2 className="text-xl font-semibold"> Freelance Web Developer </h2>
          <h4 className="font-medium">Upwork (2023 - Present)</h4>
          <ul className="list-disc pl-6">
            <li>
              Earned{" "}
              <div className="inline-block font-medium">
                <RoughNotation
                  type="highlight"
                  show={true}
                  color="#a7fc9f"
                  animationDelay={9000}
                >
                  Top Rated
                </RoughNotation>
              </div>{" "}
              badge for consistently delivering{" "}
              <div className="inline-block">
                <RoughNotation
                  type="highlight"
                  show={true}
                  color="#fae996"
                  animationDelay={9800}
                >
                  high-quality work
                </RoughNotation>
              </div>{" "}
              and maintaining excellent{" "}
              <div className="inline-block">
                <RoughNotation
                  type="highlight"
                  show={true}
                  color="#FFBD73"
                  animationDelay={10600}
                >
                  client relationships
                </RoughNotation>
              </div>{" "}
              .
            </li>
            <li>
              Worked on diverse web development projects, specializing in
              ReactJS, NodeJS, MongoDB, and other modern web technologies.
            </li>
            <li>
              Successfully completed{" "}
              <div className="inline-block">
                <RoughNotation
                  type="highlight"
                  show={true}
                  color="#a7fc9f"
                  animationDelay={11400}
                >
                  12 projects
                </RoughNotation>
              </div>{" "}
              , helping businesses enhance their digital presence with custom
              web solutions.
            </li>
          </ul>
          <a
            href="https://www.upwork.com/freelancers/~01efd3f02eb05280fa"
            target="_blank"
            className="inline-block"
          >
            <FilledBtn label="View Profile" />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
