import { DataContext } from "./dataContext";
import { DataProviderProps } from '../types/types'
 import { personalInfo, certificates, footerLinks, projects, socialLinks,skills } from '../data/data'


export default function DataProvider({children}: DataProviderProps) {
    return (
        <DataContext.Provider value={
          {
           personalInfo,
           certificates,
           socialLinks,
           footerLinks,
           projects,
           skills
          }}>
          {children}
        </DataContext.Provider>
      );
    }