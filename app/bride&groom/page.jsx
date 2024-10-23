import Image from "next/image";
import React from "react";
import Nav from "../navbar/page";

const BrideGroom = () => {
  return (
    <>
      <Nav />
      <section className="bride_groom_section container-fluid">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-4">
              <Image
                src={"/assets/IMG_1093.jpg"}
                width={300}
                height={300}
                className="img-fluid"
                alt=""
                priority
              />
            </div>
            <div className="col-md-4">
              <Image
                src={"/assets/IMG_1093.jpg"}
                width={300}
                height={300}
                className="img-fluid"
                alt=""
                priority
              />
            </div>
            <div className="col-md-4">
              <Image
                src={"/assets/IMG_1093.jpg"}
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

export default BrideGroom;
