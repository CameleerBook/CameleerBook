import PageBodyLayout from "../../components/PageBodyLayout";
import PageLayout from "../../components/PageLayout";
import "./index.css"

function AboutBody() {

  return (
    <>
      <PageBodyLayout title="About Us" body={<>TODO</>} />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <PageLayout body={<AboutBody />} />
    </>
  );
}

export default AboutPage;