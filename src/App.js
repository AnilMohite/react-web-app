import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Gallery from "./pages/Gallery";
import BlogDetail from "./pages/BlogDetail";
import GalleryDetail from "./pages/GalleryDetail";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:blogId" element={<BlogDetail />} />
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="gallery/:slug" element={<GalleryDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
