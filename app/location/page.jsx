import React from "react";
import Nav from "../navbar/page";

const Location = () => {
  return (
    <>
      <Nav />
      <section className="location_section container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3870.8462401942866!2d121.083842!3d14.027127000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDAxJzM3LjciTiAxMjHCsDA1JzAxLjgiRQ!5e0!3m2!1sen!2sph!4v1729663451217!5m2!1sen!2sph"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
