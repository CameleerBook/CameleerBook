import CoverItem from "../../components/CoverItem";
import IntroParagraph from "../../components/IntroParagraph";
import PageLayout from "../../components/PageLayout";
import "./index.css"

function HomeBody() {
  return (
    <div className="homePage-container">
      <div className="homePage-element">
        <div className="homePage-intro">
          <IntroParagraph msg={{ title: "title", text: "text" }} />
          <IntroParagraph msg={{ title: "title", text: "text" }} />
        </div>
      </div>
      <div className="homePage-element">
        <CoverItem />
      </div>
      <div className="homePage-element">
        <div className="homePage-intro">
          <IntroParagraph msg={{ title: "title", text: "text" }} />
          <IntroParagraph msg={{ title: "title", text: "text" }} />
        </div>
      </div>
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