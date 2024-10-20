import fridayImg from "../../assets/Projects/friday-school.png";

const Friday = () => {
  return (
    <div className="shadow-lg border flex flex-col md:flex-row p-4 rounded-lg gap-6 bg-gray-100">
      {/* Image */}
      <div className="max-w-96 rounded-lg overflow-hidden">
        <img src={fridayImg} alt="" />
      </div>
      {/* Content */}
      <div className=" flex flex-col justify-between gap-3">
        <h2
          onClick={() => document.getElementById("friday").showModal()}
          className="text-xl font-medium leading-tight text-gray-800 hover:text-gray-900 hover:underline duration-300 cursor-pointer"
        >
          Friday School
        </h2>
        <div className="*:text-blue-600 space-x-2 text-xs">
          <span>ReactJS</span>
          <span>Tailwind CSS</span>
          <span>NodeJS</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>Mongoose</span>
        </div>
        <p className="text-sm text-gray-700">
          Friday School is an innovative web application tailored for social
          learning among friends. It&apos;s the go-to platform where you and
          your buddies can deepen your knowledge, challenge each other, and have
          fun while doing it. Here&apos;s a sneak peek into what makes Friday
          School for Friends so special
        </p>

        <div className="flex flex-col sm:flex-row gap-1 md:gap-3 items-start">
          <a
            href="https://github.com/MahidunNobi/friday-school-client"
            target="_blank"
            className="inline-block w-full md:w-auto"
          >
            <button className="w-full md:w-auto bg-gray-700 border-2 border-gray-700 text-white text-sm px-7 rounded-md py-2 hover:border-gray-900 hover:bg-gray-900 duration-200">
              Client Code
            </button>
          </a>
          <a
            href="https://github.com/MahidunNobi/friday-school-server"
            target="_blank"
            className="inline-block w-full md:w-auto"
          >
            <button className="w-full md:w-auto bg-gray-700 border-2 border-gray-700 text-white text-sm px-7 rounded-md py-2 hover:border-gray-900 hover:bg-gray-900 duration-200">
              Server Code
            </button>
          </a>

          <a
            href="https://friday-school.web.app/"
            target="_blank"
            className="inline-block w-full md:w-auto"
          >
            <button className="w-full md:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 text-sm hover:text-white duration-200 px-7 rounded-md py-2 flex items-center justify-center gap-3 ">
              Live Demo
            </button>
          </a>
        </div>
      </div>
      <dialog id="friday" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">Art Box</h1>

            {/* Description */}
            <p className="text-lg mb-4">
              <strong>ArtBox</strong> is an online platform dedicated to
              inspiring creativity and connecting artists and crafters
              worldwide. Our mission is to provide a diverse range of
              high-quality art supplies, crafting materials, and handmade
              creations to fuel the passions of creative individuals everywhere.
            </p>

            <p className="text-lg mb-4">
              From paintings and drawings to DIY projects and artisanal crafts,
              ArtBox offers a curated selection of products and resources to
              support artists and makers of all skill levels. Beyond shopping,
              ArtBox is also a vibrant community where members can share their
              work, exchange ideas, and find inspiration from fellow creators.
            </p>

            {/* Selected Category */}
            <p className="text-lg mb-4">
              <strong>Selected Category:</strong> Painting and Drawing
            </p>

            {/* Features */}
            <h2 className="text-2xl font-semibold mb-3">Features</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Email and Password-based authentication</li>
              <li>Google authentication</li>
              <li>GitHub authentication</li>
              <li>Protected route</li>
              <li>Create art and craft item functionality</li>
              <li>Update art and craft item functionality</li>
              <li>Delete art and craft functionality</li>
              <li>Browse by category functionality</li>
            </ul>

            {/* NPM Packages */}
            <h2 className="text-2xl font-semibold mb-3">NPM Packages</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>react-icons</li>
              <li>react-simple-typewriter</li>
              <li>react-tooltip</li>
              <li>sweetalert2</li>
              <li>swiper</li>
              <li>firebase</li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Friday;
