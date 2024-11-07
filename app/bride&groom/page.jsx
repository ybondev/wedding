"use client";
import Image from "next/image";
import { React, useEffect, useState } from "react";
import Nav from "../navbar/page";
import Data from "../json/data.json";

const BrideGroom = () => {
  const [data, setData] = useState([]);

  const dataRaw = () => {
    const res = Data.photos;
    console.log(res[0].image_link);
    setData(res);
  };

  useEffect(() => {
    dataRaw();
  }, []);
  return (
    <>
      <Nav />
      <section className="bride_groom_section container-fluid">
        <div className="container">
          <div className="row gy-3">
            {data.map((x) => {
              return (
                <div className="col-md-4" key={x.id}>
                  <Image
                    src={x.image_link}
                    width={300}
                    height={300}
                    className="img-fluid"
                    alt=""
                    priority
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrideGroom;
