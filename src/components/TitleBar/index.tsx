import { useNavigate } from "react-router";
import "./index.css"
import { ABOUT, GALLERY, HOME, RELATED_WORK } from "../../utils/navigation";

function TitleBar() {
  const navigate = useNavigate();

  const title = "Learn Verification with Cameleer"

  return (
    <div className="titleBar-container">
      <div className="titleBar-title-container">
        <p className="titleBar-title">{title}</p>
      </div>
      <div className="titleBar-item-container" onClick={() => navigate(HOME)}>Home</div>
      <div className="titleBar-item-container" onClick={() => navigate(GALLERY)}>Proof Gallery</div>
      <div className="titleBar-item-container" onClick={() => navigate(RELATED_WORK)}>Related Work</div>
      <div className="titleBar-item-container" onClick={() => navigate(ABOUT)}>About</div>
    </div>
  );
}

export default TitleBar;