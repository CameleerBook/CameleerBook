import { IconType } from "../../utils/types";

function Icon(props: { icon: IconType }) {
  return (
    <>
      <i className="material-icons">{props.icon.name}</i>
    </>
  );
}

export default Icon;