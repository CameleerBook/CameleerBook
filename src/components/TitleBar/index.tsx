import { useLocation, useNavigate } from "react-router";
import "./index.css"

function TitleBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate();


  function navigateHome() {
    const url = "/"
    navigate(url)
  }

  const title = "Apprendre la vérification avec Cameleer"
  const titleStyle = pathname == "/" ? "titleBar-title-container" :
    "titleBar-smallTitle-container"

  return (
    <div className="titleBar-container">
      <div className={titleStyle}>
        <p className="titleBar-title">{title}</p>
      </div>
      <>{
        pathname == "/" ?
          <></> :
          <div className="titleBar-item-container" onClick={navigateHome}>Home</div>
      }</>
      <div className="titleBar-item-container">Related Work</div>
      <div className="titleBar-item-container">About Us</div>
    </div>
  );
}

export default TitleBar;