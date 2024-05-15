import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let showFullDesc = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4 flex flex-col justify-center h-full ">
        <section className="mb-6">
          {/* Type */}
          <div className="text-gray-600 my-2">{job.type}</div>
          {/* Title */}
          <h3 className="text-xl font-bold">{job.title}</h3>
        </section>
        {/* Description */}
        <section>
          <div className={`${showFullDescription ? "" : "line-clamp-2"} mb-5`}>
            {job.description}
          </div>
          <button
            onClick={showFullDesc}
            className="text-indigo-500 mb-5 hover:text-indigo-600 self-start"
          >
            {showFullDescription ? "Less..." : "More..."}
          </button>
        </section>
        <section className="mt-auto">
          {/* Salary */}
          <h3 className="text-green-700 mb-2">{job.salary}</h3>
          {/* Divider */}
          <div className="border border-gray-100 mb-5"></div>
          {/* Location */}
          <div className="flex flex-col lg:flex-row justify-between mb-0">
            <div className="text-orange-700 mb-3">
              <FaMapMarker className="inline text-lg mr-1" />
              {job.location}
            </div>
            <Link
              to={`/job/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm inline-block"
            >
              Read More
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobListing;
