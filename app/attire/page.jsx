import React from "react";
import Image from "next/image";
import Nav from "../navbar/page";

const page = () => {
  return (
    <>
      <div className="container">
        <Nav />
      </div>
      <section className="attire_section container-fluid">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-12">
              <Image
                src={"/assets/attire.png"}
                width={300}
                height={300}
                className="img-fluid"
                alt=""
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
