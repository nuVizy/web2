import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Photography from './pages/Photography';
import Videography from './pages/Videography';
import MusicVideos from './pages/MusicVideos';
import Design from './pages/Design';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'work', element: <Work /> },
      { path: 'work/:slug', element: <ProjectDetail /> },
      { path: 'photography', element: <Photography /> },
      { path: 'videography', element: <Videography /> },
      { path: 'music-videos', element: <MusicVideos /> },
      { path: 'design', element: <Design /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> }
    ]
  }
]);

export default router;
