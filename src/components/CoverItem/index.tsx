import { COVER } from "../../utils/constants";
import { onClickUrl } from "../../utils/utils";
/*import { onClickUrl } from "../../utils/utils";*/
import "./index.css"

function CoverItem() {

  const link = "CameleerBook/main.pdf"

  return (
    <div className="coverItem-container">
      <div className="coverItem-image-container">
        <img src={COVER} className="coverItem-image" alt={""}/>
      </div>
      <div className="coverItem-bottom">
        <div className="coverItem-button-container">
          <div className="coverItem-button-style" onClick={() => onClickUrl(link)}>
            Read the PDF
          </div>
        </div>
      </div>
    </div>
  );

  /*return (
    <div className="coverItem-container">
      <div className="coverItem-image-container">
        <img src={COVER} className="coverItem-image"
          alt={""} width={props.width} height={props.height} />
      </div>

    </div>
  );*/
}

/*

      <div className="coverItem-bottom">
        <div className="coverItem-button-container">
          <div className="coverItem-button-style" onClick={() => onClickUrl(link)}>
            Read the PDF
          </div>
        </div>
        <div className="coverItem-button-container">
          <div className="coverItem-button-style">Read Online</div>
        </div>
      </div>

*/

export default CoverItem;