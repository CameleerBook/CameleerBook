import PageBodyLayout from "../../components/PageBodyLayout";
import PageLayout from "../../components/PageLayout";

function GalleryBody() {
  return (
    <>
      <PageBodyLayout title="Proof Gallery" body={<p>TODO</p>} />
    </>
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