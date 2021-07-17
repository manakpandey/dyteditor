import React from "react";
import Spinner from "../../icons/spinner";
import "./index.scss";

export default function Preloader() {
  return (
    <div className="de-preloader">
      <div className="de-heading">Editor_</div>
      <Spinner color={"#fff"} size={48}/>
    </div>
  );
}
