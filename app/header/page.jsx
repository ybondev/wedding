import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="row gy-3">
      <div className="col-md-12">
        <Link href={"/"}>
          <Image
            src={"/assets/banner.png"}
            width={1321}
            height={288}
            className="img-fluid banner"
            alt=""
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
