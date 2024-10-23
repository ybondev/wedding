import Image from "next/image";
import React from "react";
import Nav from "../navbar/page";

const page = () => {
  return (
    <>
      <div className="container">
        <Nav />
      </div>
      <section className="invitation_section container-fluid">
        <div className="container">
          <div className="row gy-3">
            <div className="col-md-4">
              <Image
                src={"/assets/1.png"}
                width={450}
                height={450}
                className="img-fluid"
                alt=""
                priority
              />
            </div>
            <div className="col-md-4">
              <Image
                src={"/assets/2.png"}
                width={450}
                height={450}
                className="img-fluid"
                alt=""
                priority
              />
            </div>
            <div className="col-md-4">
              <Image
                src={"/assets/3.png"}
                width={450}
                height={450}
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
