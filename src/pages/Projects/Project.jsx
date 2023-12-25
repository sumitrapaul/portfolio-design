/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const Project = ({project}) => {

    return (
        <div>
             <div className="card w-full bg-base-100 shadow-xl">
          <figure>
            <img
              src={project.image1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {project.name}
            </h2>
            <p>{project.technology}</p>
            <div className="card-actions justify-end">
              <a href={project.live} className="badge badge-outline">Live</a>
              <Link to={`/details/${project.id}`}><div className="badge badge-outline">Details</div></Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Project;