import Image from "next/image";
import React from "react";
import Nav from "../navbar/page";

const Home = () => {
  return (
    <>
      <div className="row gy-3">
        <div className="col-md-12">
          <div className="text1">
            December 07, 2024 • Balete, 45 days to go!
          </div>
        </div>
      </div>
      <Nav />
      <div className="row gy-3 picture_model">
        <div className="col-md-4 picture">
          <Image
            src={"./assets/IMG_3753.jpg"}
            width={450}
            height={450}
            className="img-fluid"
            alt=""
            priority
          />
        </div>
        <div className="col-md-4 picture">
          <Image
            src={"/assets/IMG_3750.jpg"}
            width={450}
            height={450}
            className="img-fluid"
            alt=""
            priority
          />
        </div>
        <div className="col-md-4 picture">
          <Image
            src={"/assets/IMG_3753.jpg"}
            width={450}
            height={450}
            className="img-fluid"
            alt=""
            priority
          />
        </div>
      </div>
      <div className="row gy-3 row3">
        <div className="col-md-12">
          <div className="text1">wedding day december 07, 2024 - 8:00 AM</div>
          <div className="text2">Welcome to Our Wedding Website</div>
          <div className="text3">
            We’re excited to have you join us as we celebrate our love and
            commitment on our special day. All the details you need are here on
            the website. Feel free to explore, and we can’t wait to share this
            unforgettable moment with you!
          </div>
        </div>
      </div>
      <div className="row gy-3 footer">
        <div className="container">
          <div className="text1">Ybon & Mileth</div>
        </div>
      </div>
    </>
  );
};

export default Home;
