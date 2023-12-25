import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Academic = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold text-center mb-12">
        Academic <span className="text-red-800">Quallification</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div data-aos="flip-right"
        data-aos-offset="200"
        data-aos-duration="300" className="card glass">
          <figure>
            <img className="w-full h-[200px]" src="https://i.ibb.co/Vms8Zhj/image.png" alt="school" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Secondary School Certificate (Science)
            </h2>
            <p className="font-bold">Nalta High School</p>
          </div>
        </div>

        <div data-aos="flip-left"
        data-aos-offset="200"
        data-aos-duration="300" className="card glass">
          <figure>
            <img className="w-full h-[200px]" src="https://i.ibb.co/26fHJ3q/image.png" alt="college" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Higher Secondary Certificate (Science)
            </h2>
            <p className="font-bold">
              Nalta Ahsania Mission Residential College
            </p>
          </div>
        </div>

        <div data-aos="flip-up"
        data-aos-offset="200"
        data-aos-duration="300" className="card glass">
          <figure>
            <img className="w-full h-[200px]" src="https://i.ibb.co/VgJV1hD/image.png" alt="university" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Computer Science and Engineering</h2>
            <p className="font-bold">
              Jashore University of Science and Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
