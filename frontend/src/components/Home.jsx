import React from "react";
import AddNotes from './AddNotes'


const Home = () => {
  return (
    <React.Fragment>
      <div id="content">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex btn-projects">
              {/* cantidad de botones por tipo de proyectos */}
              <button className="btn px-4 py-1 mx-2">All</button>
              <button className="btn mx-2">Projects</button>
            </div>
            <div className="d-flex">
                <AddNotes />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
