import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCareers } from "../services/careers.api";

export default function Mydata() {
  const [profiles, setProfiles] = useState();
//   const [id, setId] = useState();

  const [title, setTitle] = useState();
  const [salary, setSalary] = useState();
  const [location, setLocation] = useState();

  async function getData(){
    const {data} = await getAllCareers()
    console.log(data)
    setProfiles(data)
  }
  useEffect(() => {
    getData()

  }, []);

 

  // console.log(profiles[profiles.length-1].id + 1)
  function handleSubmit(e) {
    e.preventDefault();

    // setId(profiles[profiles.length - 1].id + 1);

    const newData = {title, salary, location };
    console.log(newData)

    fetch("http://localhost:4000/careers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    }).then(console.log("new profile added"));
  }

  return (
    <div className="careers">
      <main>
        {/*profiles && {profiles.map(career => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}  */}
        

        <form onSubmit={handleSubmit}>
          <input
            type="name"
            name="title"
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="salary"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <input
            type="name"
            placeholder="location"
            value={location}
            name="location"
            onChange={(e) => setLocation(e.target.value)}
          />
          <button>submit</button>
        </form>
      </main>
    </div>
  );
}
