import {lazy, Suspense} from 'react'
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/_Layout/app";
import { NotFound } from './pages/404';
import { LoadingScreen } from './components/loading/loadingScreen';


//importar componentes usando lazy
const Home = lazy(() => import('./pages/app/home'));
const About = lazy(() => import('./pages/app/about'));
const ProjectsSection = lazy(() => import('./pages/app/projects'));
const Contact = lazy(() => import('./pages/app/contact'));
const Experience = lazy(() => import('./pages/app/experience'));
const Skills = lazy(() => import('./pages/app/skills'));



export const router = createBrowserRouter([
    
    {
        path: '/', 
        element:(
            <Suspense fallback={<LoadingScreen />}>
                <Layout />
            </Suspense>
        ),
            children: [
                { index:true, path: 'home', element: <Home /> },
                { path: 'about', element: <About /> },
                { path: 'projects', element: <ProjectsSection /> },
                { path: 'contact', element: <Contact /> },
                { path: 'experience', element: <Experience /> },
                { path: 'skills', element: <Skills /> },
                { path: '*', element: <NotFound /> }, // Default route 404
                ]
    },
])