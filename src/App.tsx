import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ChapterPage from './pages/ChapterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/chapter/:id' element={<ChapterPage />} />
    </Routes>
  );
}

export default App;
