// import { saveAs } from "file-saver";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {

  // const handleDownload = () => {
  //   const fileUrl = 'https://drive.google.com/file/d/1ddNWT6a7ftT7f9gfA20_95-eLUwOmxk6/view?usp=sharing';
  //   const fileName = 'sumitra-paul-resume.pdf'; // Adjust the file name and extension accordingly

  //   saveAs(fileUrl, fileName);
  // };

  return (
    <div className="mt-12 bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div>
          <img
            src="https://i.ibb.co/bb4QcQH/photo-2023-12-11-21-47-10-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="p-2 md:p-0">
          <h2 className="text-2xl text-white font-bold">
            Hi, I am <br />{" "}
            <span className="text-red-900 font-bold text-5xl">
              Sumitra Paul
            </span>
          </h2>
          <TypeAnimation
            sequence={[
              "Highly Motivated Web Developer",
              1000,
              "Passionate Developer",
              1000,
              "Dedicated to Progress and Hard Work",
              1000,
              "Constantly Learning and Exploring New Technologies",
              1000,
              "Expert in Creating Responsive User Interfaces",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block", color: "white" }}
            repeat={Infinity}
          />
          <br />
          <br />
          <a href="sumitra-paul-resume.pdf" download="Resume.pdf">
            <button className="btn btn-outline text-white">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
