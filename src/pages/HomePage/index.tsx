import GraphicalTableOfContents from "../../components/GraphicalTableOfContents";
import Introduction from "../../components/Introduction";
import PageLayout from "../../components/PageLayout";
import { INTRO_MSG_LIST } from "../../utils/constants";
import "./index.css"

function HomeBody() {
  return (
    <div className="body-intro-item-container">
      <div className="body-intro-item">
        <Introduction msglist={INTRO_MSG_LIST} />
      </div>
      <div className="body-intro-item">
        <GraphicalTableOfContents />
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