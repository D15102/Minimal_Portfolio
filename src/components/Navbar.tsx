import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Common link styles
  const linkStyles = 'text-xl tracking-widest hover:text-blue-500 transition ease-linear hover:border-b border-b-blue-500 text-center whitespace-nowrap';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-20 px-4 md:px-6 lg:px-8 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-black'
    }`}>
      <div className='w-full h-full max-w-7xl mx-auto flex items-center justify-between px-0 sm:px-2'>
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10001/10001425.png"
            className='w-[2.8rem] h-[2.6rem] cursor-pointer'
            alt="Logo"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:flex justify-end items-center ml-auto'>
          <div className="flex items-center md:space-x-2 lg:space-x-6 xl:space-x-12">
            <a href="#home" className={`${linkStyles} px-2 md:px-3 lg:px-4 py-2`}>Home</a>
            <a href="#technicalSkills" className={`${linkStyles} px-2 md:px-3 lg:px-4 py-2`}>Technical Skills</a>
            <a href="#projects" className={`${linkStyles} px-2 md:px-3 lg:px-4 py-2`}>Featured Projects</a>
            <a href="#tools" className={`${linkStyles} px-2 md:px-3 lg:px-4 py-2`}>Professional Tools</a>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-black shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}>
          <div className="flex flex-col items-center py-4 space-y-6">
            <a href="#home" className={`${linkStyles} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#technicalSkills" className={`${linkStyles} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Technical Skills</a>
            <a href="#projects" className={`${linkStyles} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Featured Projects</a>
            <a href="#tools" className={`${linkStyles} py-2`} onClick={() => setIsMobileMenuOpen(false)}>Professional Tools</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar