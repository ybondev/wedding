import React from "react";
import Home from "./home/page";

const page = () => {

  return (
    <>
      <section className="home_section container-fluid" id="home">
        <div className="container">
          <Home />
        </div>
      </section>
    </>
  );
};

export default page;
