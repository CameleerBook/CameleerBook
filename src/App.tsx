import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';
import RelatedPage from './pages/RelatedPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/chapter/:id' element={<ChapterPage />} />
      <Route path='/gallery' element={<GalleryPage />} />
      <Route path='/relatedwork' element={<RelatedPage />} />
    </Routes>
  );
}

export default App;
