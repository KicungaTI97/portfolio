import { Menu, X } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../context/dataContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const { personalInfo } = useContext(DataContext);
  const menuRef = useRef(null);

  const isActiveLink = (path) =>{
    return location.pathname === path ? 'border-b-2 border-pink-500' : 'hover:text-pink-300';
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Redirecionar para home quando estiver na rota raiz
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate]);

  // Controle de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <nav
        ref={menuRef}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent '
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/home">
              <span className="text-white font-bold text-xl">{personalInfo.name}</span>
            </NavLink>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(
                (section) => (
                  <NavLink
                    key={section}
                    to={`/${section}`}
                    className={`${isActiveLink(`/${section}`)} text-white transition-all`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </NavLink>
                )
              )}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/50 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map(
                (section) => (
                  <NavLink
                    to={`/${section}`}
                    key={section}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-center text-white hover:bg-white/10 px-3 py-2 rounded-md transition shadow-md"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </NavLink>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}