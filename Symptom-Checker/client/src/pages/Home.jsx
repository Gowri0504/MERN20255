import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/symptoms")
      .then(response => {
        setSymptoms(response.data);
      })
      .catch(error => {
        console.error("Error fetching symptoms:", error);
      });
  }, []);

  return (
    <div>
      <h2>Symptoms List</h2>
      <ul>
        {symptoms.map((symptom, index) => (
          <li key={index}>{symptom.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
