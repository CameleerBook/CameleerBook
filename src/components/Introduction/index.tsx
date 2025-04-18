import { IntroMessage } from "../../utils/types";
import IntroParagraph from "../IntroParagraph";
import "./index.css"

function Introduction(props: { msglist: IntroMessage[] }) {
  return (
    <div className="introduction-container">{
      props.msglist.map(e => <IntroParagraph msg={e} />)
    }</div>
  );
}

export default Introduction;