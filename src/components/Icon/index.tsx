import { IconType } from "../../utils/types";
import "./index.css"


function Icon(props: { icon: IconType }) {
  return (
    <>
      <i className="material-icons">{props.icon.name}</i>
    </>
  );
}

export default Icon;