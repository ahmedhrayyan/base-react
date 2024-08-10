import { createRoutesFromElements, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Layout from "@/components/layout/Layout";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>,
);

export default routes;
