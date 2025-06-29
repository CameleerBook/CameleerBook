import { PROOF_LINK } from "../../utils/navigation";
import { Proof } from "../../utils/types";
import { onClickUrl } from "../../utils/utils";
import "./index.css"

function ProofItem(props: { proof: Proof }) {
  const proof = props.proof
  const name = proof.name
  const link = PROOF_LINK + proof.link + ".ml.html"
  
  return (
    <div className="proofItem-container" onClick={() => onClickUrl(link)} >
      <p>{name}</p>
    </div>
  )
}

export default ProofItem;