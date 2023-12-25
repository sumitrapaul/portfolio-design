import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const findProject = data.find((project) => project.id == id);
        setProject(findProject);
      });
  }, [id]);

  return (
    <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 m-2 md:m-0">Name: {project.name}</h2>
        <div>
    
            <h2 className="font-bold text-xl mb-10 m-2 md:m-0"><span className="text-4xl text-red-900">Features :</span> {project.features}</h2>
            
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
    <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="mb-4" src={project.image2} alt="Shoes" />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="mb-4" src={project.image3} alt="Shoes" />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="mb-4" src={project.image4} alt="Shoes" />
        </figure>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="mb-4" src={project.image5} alt="Shoes" />
        </figure>
      </div>
    </div>
    <div className="flex justify-center gap-6">

    <a href={project.client}><button className="btn bg-gray-900 text-white">Client</button></a>
    <a href={project.server}><button className="btn bg-gray-900 text-white">Server</button></a>
    </div>
    </div>
  );
};

export default ProjectDetails;
