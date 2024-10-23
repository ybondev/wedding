"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Nav from "../navbar/page";

const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-07T00:00:00"); // Set target date
    const currentTime = new Date(); // Get current date and time
    const difference = targetDate - currentTime; // Difference in milliseconds

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="row gy-3">
        <div className="col-md-12">
          <div className="text1">
            December 07, 2024 • Balete, <span>{timeLeft.days}</span> days to go!
          </div>
        </div>
      </div>
      <Nav />
      <div className="row gy-3 picture_model">
        <div className="col-md-4 picture1">
          <Image
            src={"/assets/1.jpg"}
            width={450}
            height={450}
            className="img-fluid"
            alt=""
            priority
          />
        </div>
        <div className="col-md-4 picture2">
          <Image
            src={"/assets/2.jpg"}
            width={450}
            height={450}
            className="img-fluid"
            alt=""
            priority
          />
        </div>
        <div className="col-md-4 picture3">
          <Image
            src={"/assets/1.jpg"}
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
