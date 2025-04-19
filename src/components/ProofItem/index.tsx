import { Proof } from "../../utils/types";
import { onClickUrl } from "../../utils/utils";
import "./index.css"

function ProofItem(props: { proof: Proof }) {
  const proof = props.proof
  const name = proof.name
  const link = "/proofs/" + proof.link

  return (
    <div className="proofItem-container" onClick={() => onClickUrl(link)} >
      <p>{name}</p>
    </div>
  )
}

export default ProofItem;