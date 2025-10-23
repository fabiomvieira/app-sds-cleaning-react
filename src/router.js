import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/see-our-work", element: <Work />},
  {path: "/our-services", element: <Services />},
  {path: "/contact-us", element: <Contact />},
])

export default router;