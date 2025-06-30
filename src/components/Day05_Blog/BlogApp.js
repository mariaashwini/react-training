import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import Categories from "./pages/Categories";
import CategoryPosts from "./pages/CategoryPosts";
import PostDetails from "./pages/PostDetails";

export default function BlogApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryPosts />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
