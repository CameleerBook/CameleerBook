import { useLocation, useNavigate } from "react-router";
import "./index.css"

function TitleBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate();

  function navigateHome() {
    const url = "/"
    navigate(url)
  }

  function navigateGallery() {
    const url = "/gallery"
    navigate(url)
  }

  function navigateRelated() {
    const url = "/relatedwork"
    navigate(url)
  }

  const title = "Learn Verification with Cameleer"
  const titleStyle = "titleBar-title-container"

  /*pathname === "/" ? "titleBar-title-container" :
    "titleBar-smallTitle-container"*/

  return (
    <div className="titleBar-container">
      <div className={titleStyle}>
        <p className="titleBar-title">{title}</p>
      </div>
      <>{
        pathname === "/" ?
          <></> :
          <div className="titleBar-item-container" onClick={navigateHome}>Home</div>
      }</>
      <div className="titleBar-item-container">Table of Contents</div>
      <>{
        pathname === "/gallery" ?
          <></> :
          <div className="titleBar-item-container" onClick={navigateGallery}>Proof Gallery</div>
      }</>
      <>{
        pathname === "/relatedwork" ?
          <></> :
          <div className="titleBar-item-container" onClick={navigateRelated}>Related Work</div>
      }</>
      <div className="titleBar-item-container">About Us</div>
    </div>
  );
}

export default TitleBar;