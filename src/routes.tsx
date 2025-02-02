import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/_Layout/app";
import { Home } from "./pages/app/home";
import { ProjectsSection } from "./pages/app/projects";
import { Experience } from "./pages/app/experience";
//import { NotFount } from "./pages/404";
import { About } from "./pages/app/about";
import { Skills } from "./pages/app/skills";
import { Contact } from "./pages/app/contact";
import { NotFount } from "./pages/404";

export const router = createBrowserRouter([
    {
        path: '/', 
        element:<Layout/>, 
            children: [
                { path: 'home', element: <Home /> },
                { path: 'about', element: <About /> },
                { path: 'projects', element: <ProjectsSection /> },
                { path: 'contact', element: <Contact /> },
                { path: 'experience', element: <Experience /> },
                { path: 'skills', element: <Skills /> },
                { path: '*', element: <NotFount /> }, // Default route 404
                ]
    },
])