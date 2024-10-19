import { IoIosMail } from "react-icons/io";
import Title from "../Shared/Title";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import FilledBtn from "../Shared/FilledBtn";
import { toast } from "react-toastify";

const LetsTalk = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_02yscq5", "template_tur481n", form.current, {
        publicKey: "IHRjUmDhG9AtrtkSD",
      })
      .then(
        () => {
          toast("Get in touch with you soon.🙂");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="my-16">
      <div className="container mx-auto">
        <Title title="Lets Talk" />;{/*---------- Contact Info-------- */}
        <div className="flex flex-col md:flex-row gap-6 py-6">
          <div className="space-y-3 md:flex-1">
            {/* ----Mail------ */}
            <div className="flex items-center gap-3 underline">
              <IoIosMail size={20} />
              <span>mdmahidunnobi@gmail.com</span>
            </div>
            {/* ----Linkedin------ */}
            <div className="flex items-center gap-3 underline">
              <FaLinkedin size={20} />
              <a
                href="https://www.linkedin.com/in/md-mahidun-nobi/"
                target="_blank"
                className="text-blue-700"
              >
                MD. Mahidun Nobi
              </a>
            </div>
            {/* ----Facebook------ */}
            <div className="flex items-center gap-3 underline">
              <FaGithub size={20} />
              <a
                href="https://github.com/MahidunNobi"
                target="_blank"
                className="text-blue-700"
              >
                MD. Mahidun Nobi
              </a>
            </div>
          </div>
          <div className="border hidden md:block"> </div>
          {/* ------------Contact  Form------------ */}
          <div className="md:flex-1">
            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              {/* ------Name------- */}
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  name="from_name"
                  className="grow"
                  placeholder="Name"
                />
              </label>
              {/* -------Email------- */}
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  name="from_email"
                  className="grow"
                  placeholder="Email"
                />
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Write your message..."
                name="message"
              ></textarea>

              <FilledBtn label={"SUBMIT"} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
