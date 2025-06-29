import { useLocation, useNavigate } from "react-router";
import "./index.css"
import { ABOUT, GALLERY, HOME, RELATED_WORK } from "../../utils/navigation";

function TitleBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate();

  const title = "Learn Verification with Cameleer"
  const titleStyle = "titleBar-title-container"

  return (
    <div className="titleBar-container">
      <div className={titleStyle}>
        <p className="titleBar-title">{title}</p>
      </div>
      <div className="titleBar-item-container" onClick={() => navigate(HOME)}>Home</div>
      <div className="titleBar-item-container" onClick={() => navigate(GALLERY)}>Proof Gallery</div>
      <div className="titleBar-item-container" onClick={() => navigate(RELATED_WORK)}>Related Work</div>
      <div className="titleBar-item-container" onClick={() => navigate(ABOUT)}>About</div>
    </div>
  );
}

/*

      <>{
        pathname === HOME ?
          <></> :
          <div className="titleBar-item-container" onClick={() => navigate(HOME)}>Home</div>
      }</>
      <div className="titleBar-item-container">Table of Contents</div>
      <>{
        pathname === GALLERY ?
          <></> :
          <div className="titleBar-item-container" onClick={() => navigate(GALLERY)}>Proof Gallery</div>
      }</>
      <>{
        pathname === RELATED_WORK ?
          <></> :
          <div className="titleBar-item-container" onClick={() => navigate(RELATED_WORK)}>Related Work</div>
      }</>
      <>{
        pathname === ABOUT ?
          <></> :
          <div className="titleBar-item-container" onClick={() => navigate(ABOUT)}>About</div>
      }</>

*/

export default TitleBar;