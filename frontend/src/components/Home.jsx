import React from "react";
import AddNotes from "./AddNotes";
import CardNotes from "./CardNotes";

// import styled from 'styled-components';

// const Title = styled.h1`
// font-size: 1.5em;
// text-align: center;
// color: palevioletred;
// `;

// const Wrapper = styled.section`
// padding: 4em;
// background: papayawhip;
// `;

// <Wrapper>
// <Title>Hello World, this is my first styled component!</Title>
// </Wrapper>

const Home = () => {
  return (
    <React.Fragment>
      <div id="content">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="btn-projects">
              {/* cantidad de botones por tipo de proyectos */}
              <button className="btn mx-2 px-4">All</button>
              <button className="btn mx-2 px-4">Projects</button>
            </div>
            <div className="d-flex">
              <AddNotes />
            </div>
          </div>
          <div className="row">
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
