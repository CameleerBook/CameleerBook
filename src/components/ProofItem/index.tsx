import { Proof } from "../../utils/types";
import "./index.css"

function ProofItem(props: { proof: Proof }) {
  return (
    <div className="proofItem-container">{props.proof.name}</div>
  )
}

export default ProofItem;