// DataContext.ts
import { createContext } from "react";
import { DataContextType } from "../types/types"; // Importe a interface se necessário

export const DataContext = createContext({} as DataContextType);