import React from "react";
import Media from "../Media";

const ProjectCard = ({project}) => {
  return (
    <button
      className='innerMedia'
      data-v-28f4920b=''
      tabIndex='0'
      style={{ pointerEvents: "initial" }}
    >
      <span className='index' data-v-28f4920b=''>
        01
      </span>
      <h3 className='t-h3' data-v-28f4920b=''>
        Internity
      </h3>
      <Media handleError={handleError} />
    </button>
  );
};

export default ProjectCard;
