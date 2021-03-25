import React from "react";

const CardNotes = () => {
  return (
    <React.Fragment>
      <div className="col py-2">
        <div className="card px-3 border-0 shadow-sm">
          <div className="card-text text-muted text-xs mt-3">23 June 2020</div>
          <div className="card-body px-0 py-3 mb-2">
            <div className="card-title">
              <span className="badge bg-warning rounded-circle px-1 py-1 mx-2">
                {" "}
              </span>
              The monkey-rope
            </div>
            <div className="card-text text-muted text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quibusdam soluta sapiente provident nulla excepturi
              dolorem earum officiis. Minus, deserunt!
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardNotes;
