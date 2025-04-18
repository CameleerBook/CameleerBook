import { IntroMessage } from "../../utils/types";
import IntroParagraph from "../IntroParagraph";
import "./index.css"

function Introduction(props: {
  msg1: IntroMessage, msg2: IntroMessage, msg3: IntroMessage
}) {
  return (
    <div className="introduction-container">
      <IntroParagraph msg={props.msg1} />
      <IntroParagraph msg={props.msg2} />
      <IntroParagraph msg={props.msg3} />
    </div>
  );
}

export default Introduction;