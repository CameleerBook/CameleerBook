import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import RelatedPage from './pages/RelatedPage';
import GalleryPage from './pages/GalleryPage';
import { ABOUT, CHAPTER, GALLERY, HOME, RELATED_WORK } from './utils/navigation';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path={CHAPTER+'/:id'} element={<ChapterPage />} />
      <Route path={GALLERY} element={<GalleryPage />} />
      <Route path={RELATED_WORK} element={<RelatedPage />} />
      <Route path={ABOUT} element={<AboutPage />} />
    </Routes>
  );
}

export default App;
