import { onClickUrl } from "../../utils/utils";
import "./index.css"

function CoverItem() {

  const link = "/main.pdf"

  return (
    <div className="coverItem-container">
      <div className="coverItem-image-container">
        <img src={require("../../assets/cover.png")} className="coverItem-image"
          width={330} height={510} />
      </div>
      <div className="coverItem-bottom">
        <div className="coverItem-button-container">
          <div className="coverItem-button-style" onClick={() => onClickUrl(link)}>Read PDF</div>
        </div>
        <div className="coverItem-button-container">
          <div className="coverItem-button-style">Read Online</div>
        </div>
      </div>
    </div>
  );
}

export default CoverItem;