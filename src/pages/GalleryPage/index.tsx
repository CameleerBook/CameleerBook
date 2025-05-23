import PageLayout from "../../components/PageLayout";
import "./index.css"

function GalleryBody() {
  return (
    <div className="galleryPage-container">
      <h1 className="galleryPage-title">Proof Gallery</h1>
      <div>
        TODO
      </div>
    </div>
  )
}

function GalleryPage() {
  return (
    <>
      <PageLayout body={<GalleryBody />} />
    </>
  );
}

export default GalleryPage;