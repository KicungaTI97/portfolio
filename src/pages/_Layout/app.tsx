import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";

export function Layout() {
  return (
    <div>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <Outlet />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}
