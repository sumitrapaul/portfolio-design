const About = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
      <div className="card lg:card-side bg-gray-900 shadow-xl">
        <figure>
          <img
            className="h-[330px] mr-16"
            src="https://i.ibb.co/XDCnPCn/photo-2023-12-11-21-47-41-removebg-preview.png"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <div className="flex">
            <h2 className="card-title mr-2 text-white">Name : </h2>
            <h2 className="card-title text-white">Sumitra Paul</h2>
          </div>
          <div className="flex">
            <h2 className="card-title mr-2 text-white">Age : </h2>
            <h2 className="card-title text-white">23</h2>
          </div>
          <div className="flex">
            <h2 className="card-title mr-2 text-white">Language : </h2>
            <h2 className="card-title text-white">Bangla and English</h2>
          </div>
          <div className="flex">
            <h2 className="card-title mr-2 text-white">Address : </h2>
            <h2 className="card-title text-white">Jashore, Bangladesh</h2>
          </div>
          <div className="flex">
            <h2 className="card-title mr-2 text-white">Nationality : </h2>
            <h2 className="card-title text-white">Bangladeshi</h2>
          </div>
          <div className="flex">
            <h2 className="card-title mr-2 text-white">Github : </h2>
            <a
              href="https://github.com/sumitrapaul"
              className="card-title text-blue-600"
            >
              Sumitra Paul
            </a>
          </div>
          <div className="flex">
            <h2 className="card-title mr-2 text-white">Linkedin : </h2>
            <a
              href="https://www.linkedin.com/in/sumitra-paul-400065285/"
              className="card-title text-blue-600"
            >
              Sumitra Paul
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
