import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { DataProvider } from "./context/dataContext";
import { AnimationProvider } from "./context/animationContext";

export function App() {

   return (
    <AnimationProvider>
      <DataProvider>
        <RouterProvider router={router} /> 
      </DataProvider>
    </AnimationProvider>
)
    
}
