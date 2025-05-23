import CoverItem from "../../components/CoverItem";
import IntroParagraph from "../../components/IntroParagraph";
import PageLayout from "../../components/PageLayout";
import { INTRO_MSG_ALGORITHMS, INTRO_MSG_AUTOMATED, INTRO_MSG_CAMELEER, INTRO_MSG_VERIFICATION } from "../../utils/constants";
import "./index.css"

function HomeBody() {
  return (
    <div className="homePage-container">
      <div className="homePage-element">
        <div className="homePage-intro">
          <IntroParagraph msg={INTRO_MSG_VERIFICATION} />
          <IntroParagraph msg={INTRO_MSG_AUTOMATED} />
        </div>
      </div>
      <div className="homePage-element">
        <CoverItem />
      </div>
      <div className="homePage-element">
        <div className="homePage-intro">
          <IntroParagraph msg={INTRO_MSG_ALGORITHMS} />
          <IntroParagraph msg={INTRO_MSG_CAMELEER} />
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <PageLayout body={<HomeBody />} />
    </>
  );
}

export default HomePage;