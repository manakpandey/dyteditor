import React from "react";
import Share from "../../icons/share";
import Spinner from "../../icons/spinner";
import "./index.scss";

interface IHeaderProps {
  onShare: () => void;
  isSharing: boolean;
}

export default function Header({ onShare, isSharing }: IHeaderProps) {
  return (
    <div className="de-header">
      <div />
      <div className={"de-heading"}>Editor_</div>
      <div
        className={"de-share"}
        onClick={!isSharing ? onShare : () => {}}
        style={isSharing ? { background: "#fff", cursor: "wait" } : {}}
      >
        {isSharing ? <Spinner /> : <Share />}
      </div>
    </div>
  );
}
