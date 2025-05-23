import CoverItem from "../../components/CoverItem";
import PageLayout from "../../components/PageLayout";
import "./index.css"

function HomeBody() {
  return (
    <div className="homePage-container">
      <div className="homePage-element">Left</div>
      <div className="homePage-element">
        <CoverItem />
      </div>
      <div className="homePage-element">Right</div>
    </div>
  )
}

/*
      <div className="homePage-intro">
        <div className="homePage-intro-empty" />
        <Introduction msglist={INTRO_MSG_LIST} />
      </div>
      <GraphicalTableOfContents />
*/

function HomePage() {
  return (
    <>
      <PageLayout body={<HomeBody />} />
    </>
  );
}

export default HomePage;