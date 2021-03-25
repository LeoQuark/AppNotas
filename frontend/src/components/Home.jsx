import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import CardNotes from "./CardNotes";

const Home = () => {
  return (
    <React.Fragment>
      <div id="content">
        <div className="container px-5 mt-3">
          <div className={`d-flex justify-content-between py-3 `}>
            <div className="btn-projects">
              {/* cantidad de botones por tipo de proyectos */}
              <button className="btn mx-2 px-4">All</button>
              <button className="btn mx-2 px-4">Projects</button>
            </div>
            <div className="d-flex">
              <AddNotes />
            </div>
          </div>
          <div className="row row-cols-2 row-cols-lg-4 gx-3">
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
            <CardNotes />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
