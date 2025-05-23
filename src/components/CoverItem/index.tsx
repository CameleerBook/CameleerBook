import "./index.css"

function CoverItem() {

  return (
    <div className="coverItem-container">
      <div className="coverItem-image-container">
        <img src={require("../../assets/cover.png")} className="coverItem-image"
          width={330} height={510}></img>
      </div>
      <div className="coverItem-buttons-container">Buttons</div>
    </div>
  );
}

export default CoverItem;