import { Menu, X } from 'lucide-react';
import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../context/dataContext';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { personalInfo } = useContext(DataContext);
  const menuRef = useRef<HTMLElement>(null);

  const isActiveLink = (path: string): string => {
    return location.pathname === path 
      ? 'border-b-2 border-pink-500 text-white' 
      : 'text-white/70 hover:text-pink-300';
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation handling
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside handling
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const navigationItems = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

  return (
    <div>
      <nav
        ref={menuRef}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/50 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <NavLink 
              to="/home"
              className="relative group"
            >
              <span className="text-white font-bold text-xl relative">
                {personalInfo.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </NavLink>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>

            <div className="hidden md:flex space-x-8">
              {navigationItems.map((section) => (
                <NavLink
                  key={section}
                  to={`/${section}`}
                  className={`${isActiveLink(`/${section}`)} relative group px-2 py-1`}
                >
                  <span className="relative">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className="px-4 py-6 bg-gradient-to-b from-black/50 to-black/80 backdrop-blur-lg space-y-2"
              >
                {navigationItems.map((section, index) => (
                  <motion.div
                    key={section}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={`/${section}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`
                        block w-full text-center px-4 py-3 rounded-lg
                        ${location.pathname === `/${section}`
                          ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white'
                          : 'text-white/70 hover:bg-white/10'
                        }
                        transition-all duration-300 transform hover:scale-105
                        hover:shadow-lg hover:shadow-pink-500/10
                      `}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}