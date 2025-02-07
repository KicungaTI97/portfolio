import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AnimationProvider } from "./context/animationContext";
import DataProvider from "./context/dataProvider";

export function App() {
   return (
    <AnimationProvider>
      <DataProvider>
        <RouterProvider router={router} /> 
      </DataProvider>
    </AnimationProvider>
)
    
}
