import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

 const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-12">
        <h1 className="text-3xl font-bold text-center mb-12">
        My <span className="text-red-800">Skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/7Y4MGXW/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              HTML
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/k9gSprc/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              CSS
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/w60pFQr/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              Tailwind
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/Qcptvns/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              React
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/r5LYp8n/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              C
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/HN2c8Pc/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              Firebase
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/g3Yf0z6/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              Javascript
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/d4pN84L/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              Node.js
            </h2>
          </div>
        </div>
        <div data-aos="zoom-in" className="card w-full h-[200px] md:w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/KbtWCV1/image.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold flex items-center justify-center">
              MongoDB
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
