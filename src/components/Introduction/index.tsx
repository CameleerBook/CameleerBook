import { IntroMessage } from "../../utils/types";
import IntroParagraph from "../IntroParagraph";
import "./index.css"

function Introduction(props: { msglist: IntroMessage[] }) {
  let i = 0;
  return (
    <div className="introduction-container">{
      props.msglist.map(e => <IntroParagraph key={i++} msg={e} />)
    }</div>
  );
}

export default Introduction;