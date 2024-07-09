import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description,gitUrl, previewUrl}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
       <div className=" overlay flex items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0  group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000">
          <Link
            href={gitUrl}
            className="top-0 left-0 mr-2 h-16 w-16 border-2 relative rounded-full block opacity-0 border-[#ADB7BE] hover:border-blue-500 group-hover:opacity-100 transition-all duration-1000"
          >
            <CodeBracketIcon className="top-0 left-0.5 relative h-10 w-10 text-[#ADb7BE] m-2 hidden cursor-pointer group-hover:block transition-all duration-1000" />
          </Link>
          <Link
            href={previewUrl}
            className="top-0 left-0  h-16 w-16 border-2 relative rounded-full block opacity-0 border-[#ADB7BE] hover:border-blue-500 group-hover:opacity-100 transition-all duration-1000"
          >
            <EyeIcon className="top-0 left-0.5 relative h-10 w-10 text-[#ADb7BE] m-2 hidden cursor-pointer group-hover:block transition-all duration-1000" />
          </Link>
        </div>

      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
