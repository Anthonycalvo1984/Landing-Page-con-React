import React from "react";

//create your first component
const Jumbotron = () => {
	return (
<>
<div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Custom jumbotron</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nobis ea. Atque sapiente illum, qui in nam inventore corrupti nemo!</p>
        <button className="btn btn-primary btn-lg" type="button">Example button</button>
      </div>
    </div>



</>		
  

	);
};

export default Jumbotron;