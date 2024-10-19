import proOneImg from "../../assets/Projects/post-portal.png";

const PostPortal = () => {
  return (
    <div className="shadow-lg border flex flex-col md:flex-row p-4 rounded-lg gap-6 bg-gray-100">
      {/* Image */}
      <div className="max-w-96 rounded-lg overflow-hidden">
        <img src={proOneImg} alt="" />
      </div>
      {/* Content */}
      <div className=" flex flex-col justify-between gap-3">
        <h2
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="text-xl font-medium leading-tight text-gray-800 hover:text-gray-900 hover:underline duration-300 cursor-pointer"
        >
          Post Portal: A Professional Platform for Engaging Content
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
          Post Portal is a sophisticated web application designed for
          individuals and communities to create, share, and engage with diverse
          content. Our platform offers a seamless experience for users to
          express ideas, connect with others, and participate in meaningful
          discussions.
        </p>
        <div className="flex flex-col sm:flex-row gap-1 md:gap-3 items-start">
          <a
            href="https://github.com/MahidunNobi/post-portal-client?tab=readme-ov-file"
            target="_blank"
            className="inline-block w-full md:w-auto"
          >
            <button className="w-full md:w-auto bg-gray-700 border-2 border-gray-700 text-white text-sm px-7 rounded-md py-2 hover:border-gray-900 hover:bg-gray-900 duration-200">
              View Code
            </button>
          </a>
          <a
            href="https://post-portal48454.netlify.app"
            target="_blank"
            className="inline-block w-full md:w-auto"
          >
            <button className="w-full md:w-auto border-2 border-gray-900 text-gray-900 hover:bg-gray-900 text-sm hover:text-white duration-200 px-7 rounded-md py-2 flex items-center justify-center gap-3 ">
              Live Demo
            </button>
          </a>
        </div>
      </div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4">
              Post Portal: A Professional Platform for Engaging Content
            </h1>

            {/* Description */}
            <p className="text-lg mb-4">
              <strong>Post Portal</strong> is a sophisticated web application
              designed for individuals and communities to create, share, and
              engage with diverse content. Our platform offers a seamless
              experience for users to express ideas, connect with others, and
              participate in meaningful discussions.
            </p>

            {/* Admin Credentials */}
            <h2 className="text-2xl font-semibold mb-3">Admin Credentials</h2>
            <p className="text-lg mb-3">
              To access the admin dashboard, use the following credentials:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Email:</strong> admin@mail.com
              </li>
              <li>
                <strong>Password:</strong> As1@34
              </li>
            </ul>

            {/* Key Features */}
            <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
            <ul className="list-decimal pl-6 mb-4">
              <li>
                <strong>Account Creation:</strong> Quick and secure registration
                to join our vibrant community.
              </li>
              <li>
                <strong>Content Creation:</strong> Freedom to create posts with
                specified tags for better discoverability.
              </li>
              <li>
                <strong>Engagement Tools:</strong> Upvote, downvote, share, and
                comment on posts to foster interactive discussions.
              </li>
              <li>
                <strong>Posting Limits:</strong> Normal users can create up to 5
                posts; unlimited posting with a Gold Badge membership for $15.
              </li>
            </ul>

            {/* User Dashboard */}
            <h2 className="text-2xl font-semibold mb-3">User Dashboard</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Profile:</strong> View personal profile details.
              </li>
              <li>
                <strong>Add Post:</strong> Create new posts with specified tags.
              </li>
              <li>
                <strong>My Posts:</strong> View all personal posts. Click on the
                comment button to see all comments for a post and report them
                with proper feedback.
              </li>
            </ul>

            {/* Admin Dashboard */}
            <h2 className="text-2xl font-semibold mb-3">Admin Dashboard</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Profile:</strong> View profile details including image,
                name, email, and statistics including total posts, total users,
                and total comments. Admins can also add new tags here.
              </li>
              <li>
                <strong>User Management:</strong> Admins can promote users to
                admin or revert them to regular users.
              </li>
              <li>
                <strong>Activities:</strong> View reported comments and take
                actions like deleting or restoring comments.
              </li>
              <li>
                <strong>Announcements:</strong> Admins can post site-wide
                announcements.
              </li>
            </ul>

            <p className="text-lg mb-4">
              Post Portal is dedicated to fostering a respectful and engaging
              environment where creativity and constructive interactions thrive.
              Join us today to start sharing your voice and connecting with a
              community that values meaningful discourse.
            </p>

            {/* Tech Stack */}
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <p className="text-lg mb-4">
              <strong>Client:</strong> React, React-router-dom, TailwindCSS,
              Stripe, Tanstack, Firebase, React-share, Recharts,
              React-hook-form, React-icons, React-helmet, Sweetalert2.
            </p>
            <p className="text-lg mb-4">
              <strong>Server:</strong> Node, Express, MongoDB, Json-web-token,
              Stripe
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PostPortal;
