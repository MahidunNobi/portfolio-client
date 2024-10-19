import Title from "../Shared/Title";
import PostPortal from "./PostPortal";

const Projects = () => {
  return (
    <section className="my-16">
      <div className="container mx-auto">
        <Title title="Featured Projects" />
        {/* -------Projects Container-------- */}
        <div className="space-y-6 mt-6">
          <PostPortal />
        </div>
      </div>
    </section>
  );
};

export default Projects;
