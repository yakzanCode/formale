import React from "react";

const ProductHighlights: React.FC = () => {
  return (
    <section className="container-fluid p-5" style={{backgroundColor: "#e6e1d0ff"}}>
      <div className="row">
        
        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column text-center">
          <div className=" mx-auto d-flex mb-2 rounded-circle " style={{width:"110px",height:"110px" ,backgroundColor: "#d6d2c4"}}>
            <img
              className="m-auto p-4"
              src="/2.png"
              alt="Eco-Friendly"
            />
          </div>
          <h6>GENTLE ON SKIN</h6>
          <p>
            Designed with sensitive skin in mind, our cleansers remove impurities without stripping away natural moisture.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column text-center">
          <div className=" mx-auto d-flex mb-2 rounded-circle " style={{width:"110px",height:"110px" ,backgroundColor: "#d6d2c4"}}>
            <img
              className="m-auto p-4"
              src="/2.png"
              alt="Eco-Friendly"
            />
          </div>
          <h6>ECO-FRIENDLY FORMULA</h6>
          <p>
            Our products are made using planet-conscious ingredients, reducing impact on the environment with every wash.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column text-center">
          <div className=" mx-auto d-flex mb-2 rounded-circle " style={{width:"110px",height:"110px" ,backgroundColor: "#d6d2c4"}}>
            <img
              className="m-auto p-4"
              src="/2.png"
              alt="Eco-Friendly"
            />
          </div>
          <h6>PLANT-BASED INGREDIENTS</h6>
          <p>
            Harnessing the power of nature, our formulations use botanical extracts for effective and safe results.
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-3 d-flex flex-column text-center">
          <div className=" mx-auto d-flex mb-2 rounded-circle " style={{width:"110px",height:"110px" ,backgroundColor: "#d6d2c4"}}>
            <img
              className="m-auto p-4"
              src="/2.png"
              alt="Eco-Friendly"
            />
          </div>
          <h6>NO ANIMAL TESTING</h6>
          <p>
            We believe beauty should be kind—none of our products are tested on animals at any stage of development.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProductHighlights;
