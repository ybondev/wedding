import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="row gy-3">
      <div className="col-md-12">
        <Image
          src={"/assets/banner.png"}
          width={1321}
          height={288}
          className="img-fluid banner"
          alt=""
          priority
        />
      </div>
    </div>
  );
};

export default Header;
