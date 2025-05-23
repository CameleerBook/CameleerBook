import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import RelatedPage from './pages/RelatedPage';
import GalleryPage from './pages/GalleryPage';
import { GALLERY, HOME, RELATED_WORK } from './utils/navigation';

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<HomePage />} />
      <Route path='/chapter/:id' element={<ChapterPage />} />
      <Route path={GALLERY} element={<GalleryPage />} />
      <Route path={RELATED_WORK} element={<RelatedPage />} />
    </Routes>
  );
}

export default App;
