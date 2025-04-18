import { ReactNode } from "react";
import FooterBar from "../FooterBar";
import TitleBar from "../TitleBar";
import "./index.css"

function PageLayout(props: { body: ReactNode }) {
  return (
    <div className="outer-container">
      <TitleBar />
      <>{props.body}</>
      <FooterBar />
    </div>
  );
}

export default PageLayout;