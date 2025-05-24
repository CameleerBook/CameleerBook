import GalleryItem from "../../components/GalleryItem";
import PageBodyLayout from "../../components/PageBodyLayout";
import PageLayout from "../../components/PageLayout";
import { CHAPTERS } from "../../utils/constants";

function GalleryListing() {
  return (
    <>
      {CHAPTERS.filter(e => e.proofs.length !== 0).map(e => <GalleryItem chapter={e} />)}
    </>
  )
}

function GalleryBody() {
  return (
    <>
      <PageBodyLayout title="Proof Gallery" body={<GalleryListing />} />
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