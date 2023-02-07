import React from "react";
import data from "../../Data/Data";
import { Link } from "react-router-dom";

const WorksPage = () => {
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Link to={`/studycase/${item.title}-study-case`}>
              <h2>{item.title}</h2>
            </Link>
            <p>{item.description}</p>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorksPage;
