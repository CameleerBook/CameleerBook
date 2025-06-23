import PageBodyLayout from "../../components/PageBodyLayout";
import PageLayout from "../../components/PageLayout";
import "./index.css"

function AboutContent() {
  return (
    <div className="aboutPage-container">
      <div className="aboutPage-item">
        <h2>The authors</h2>
        <p>
          Pedro Gasparinho - Computer Science Master's student at <a href="https://www.di.fct.unl.pt/en">NOVA SST</a>.
        </p>
        <p>
          <a href="https://mariojppereira.github.io/">Mário Pereira</a> - Assistant Professor at <a href="https://www.di.fct.unl.pt/en">NOVA SST</a>.
        </p>
      </div>
      <div className="aboutPage-item">
        <h2>The book and website</h2>
        <p>
          "Learn Verification with Cameleer" is a project stemming from
          Pedro Gasparinho's Master's dissertation, which is also advised by
          Prof. Dr. Mário Pereira.
        </p>
      </div>
      <div className="aboutPage-item">
        <h2>Acknowledgments</h2>
        <p>
          A special thanks to the Cameleer team for important feedback during
          the development of this book and website, in particular, Ion Chirica,
          Tiago Soares, João Nini, Gonçalo Duarte, Keiko Tiago, Rui Xavier, Tiago
          Meirim.
        </p>
      </div>
    </div>
  )
}

function AboutBody() {

  return (
    <>
      <PageBodyLayout title="About Us" body={<AboutContent />} />
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
