import { ReactNode } from "react";
import "./index.css"

function PageBodyLayout(props: { title: string, body: ReactNode }) {
  return (
    <div className="pageBodyLayout-container">
      <h1 className="pageBodyLayout-title">{props.title}</h1>
      <div>{props.body}</div>
    </div>
  );
}

export default PageBodyLayout;