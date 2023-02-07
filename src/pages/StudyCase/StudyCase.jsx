import React from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/Data";

const StudyCase = () => {
  const { title } = useParams();
  const item = Object.values(data).find((item) => item.title === title);
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{item.name}</p>
    </div>
  );
};

export default StudyCase;
