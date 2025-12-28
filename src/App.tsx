// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import MusicVideos from './pages/MusicVideos';
import Design from './pages/Design';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />

        <Route path="/photography" element={<Photography />} />
        <Route path="/videography" element={<Videography />} />
        <Route path="/music-videos" element={<MusicVideos />} />
        <Route path="/design" element={<Design />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
