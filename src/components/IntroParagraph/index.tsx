import { IntroMessage } from "../../utils/types";
import "./index.css"

function IntroParagraph(props: { msg: IntroMessage }) {
  return (
    <div className="introParagraph-container">
      <p className="introParagraph-title">{props.msg.title}</p>
      <p className="introParagraph-text">{props.msg.text}</p>
    </div>
  );
}

export default IntroParagraph;