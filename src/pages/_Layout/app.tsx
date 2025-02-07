import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { motion} from 'framer-motion';

export function Layout() {
  return (
    <div>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
           {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-purple-600/20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '20%', left: '20%' }}
          />
          <motion.div
            className="absolute h-64 w-64 rounded-full bg-pink-600/20 blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ top: '60%', right: '20%' }}
          />
        </div>
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}
