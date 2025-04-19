import GraphicalTableOfContents from "../../components/GraphicalTableOfContents";
import Introduction from "../../components/Introduction";
import PageLayout from "../../components/PageLayout";
import { INTRO_MSG_LIST } from "../../utils/constants";
import "./index.css"

function HomeBody() {
  return (
    <div className="homePage-container">
      <div className="homePage-intro">
        <div className="homePage-intro-empty" />
        <Introduction msglist={INTRO_MSG_LIST} />
      </div>
      <GraphicalTableOfContents />
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