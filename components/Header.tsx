import React, { useContext, useState, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import { ICONS } from '../constants';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
    const { setPage, cartCount, setIsCartOpen, wishlist, searchQuery, setSearchQuery, searchResults, selectProduct } = useContext(AppContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDesktopSearchOpen, setIsDesktopSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const searchRef = useRef<HTMLDivElement>(null);

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Handle click outside for desktop search
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsDesktopSearchOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleMobileLinkClick = (page: 'home' | 'category' | 'login') => {
        setPage(page);
        setIsMobileMenuOpen(false);
    }
    
    const handleMobileProductSelect = (id: number) => {
        selectProduct(id);
        setIsMobileMenuOpen(false);
    }

    const navLinkClasses = "text-sm font-medium text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text transition-colors duration-300";

    return (
        <>
            <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-8">
                            <button onClick={() => setPage('home')} className="flex items-center space-x-2">
                                <div className="bg-gray-900 dark:bg-gray-100 p-1.5 rounded-full">{ICONS['logo']}</div>
                                <span className="text-xl font-bold tracking-tight text-light-text dark:text-dark-text">LuxeMotion</span>
                            </button>
                            <nav className="hidden md:flex items-center space-x-6">
                                <button onClick={() => setPage('home')} className={navLinkClasses}>Home</button>
                                <button onClick={() => setPage('category')} className={navLinkClasses}>Shop</button>
                                <a href="#" className={navLinkClasses}>About</a>
                                <a href="#" className={navLinkClasses}>Contact</a>
                            </nav>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <div ref={searchRef} className="relative hidden md:block">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="w-48 lg:w-64 bg-light-card/50 dark:bg-dark-card/50 border border-gray-300 dark:border-gray-700 rounded-full py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onFocus={() => setIsDesktopSearchOpen(true)}
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-light-subtle dark:text-dark-subtle">
                                        {ICONS['search']}
                                    </div>
                                </div>
                                {isDesktopSearchOpen && searchQuery && (
                                    <div className="absolute top-full mt-2 w-full max-w-sm lg:max-w-md bg-light-card dark:bg-dark-card rounded-lg shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-fade-in">
                                        {searchResults.length > 0 ? (
                                            <ul className="max-h-96 overflow-y-auto">
                                                {searchResults.map(product => (
                                                    <li key={product.id}>
                                                        <button onClick={() => { selectProduct(product.id); setIsDesktopSearchOpen(false); }} className="w-full text-left flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                                            <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
                                                            <div className="ml-3 flex-1">
                                                                <p className="text-sm font-medium">{product.name}</p>
                                                                <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">${product.price.toFixed(2)}</p>
                                                            </div>
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <div className="p-4 text-center text-sm text-light-subtle dark:text-dark-subtle">
                                                No results found for "{searchQuery}"
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <button onClick={() => setPage('login')} className="hidden md:block text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text transition-colors duration-300 p-2 rounded-full">{ICONS['user']}</button>
                            <button onClick={() => setPage('wishlist')} className="relative text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text transition-colors duration-300 p-2 rounded-full">
                                {ICONS['heart']}
                                {wishlist.length > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-xs font-medium text-white">
                                        {wishlist.length}
                                    </span>
                                )}
                            </button>
                            <ThemeToggle />
                            <button onClick={() => setIsCartOpen(true)} className="relative text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text transition-colors duration-300 p-2 rounded-full">
                                {ICONS['cart']}
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-xs font-medium text-white">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <div className="md:hidden">
                                <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-light-subtle dark:text-dark-subtle">
                                    {ICONS['menu']}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                 <div className="fixed inset-0 z-50 bg-light-bg dark:bg-dark-bg animate-fade-in md:hidden">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="flex items-center justify-between h-16 border-b border-gray-200 dark:border-gray-800">
                             <button onClick={() => handleMobileLinkClick('home')} className="flex items-center space-x-2">
                                <div className="bg-gray-900 dark:bg-gray-100 p-1.5 rounded-full">{ICONS['logo']}</div>
                                <span className="text-xl font-bold tracking-tight">LuxeMotion</span>
                            </button>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">{ICONS['x']}</button>
                        </div>

                        <div className="p-4">
                             <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full bg-light-card dark:bg-dark-card border border-gray-300 dark:border-gray-700 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-light-subtle dark:text-dark-subtle">
                                    {ICONS['search']}
                                </div>
                            </div>

                            {searchQuery ? (
                                <div className="mt-4">
                                {searchResults.length > 0 ? (
                                    <ul className="max-h-64 overflow-y-auto space-y-2">
                                        {searchResults.map(product => (
                                            <li key={product.id}>
                                                <button onClick={() => handleMobileProductSelect(product.id)} className="w-full text-left flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-lg">
                                                    <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
                                                    <div className="ml-3 flex-1">
                                                        <p className="text-sm font-medium">{product.name}</p>
                                                        <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">${product.price.toFixed(2)}</p>
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-4 text-center text-sm text-light-subtle dark:text-dark-subtle">
                                        No results found
                                    </div>
                                )}
                                </div>
                            ) : (
                                <>
                                    <nav className="mt-8 flex flex-col space-y-2">
                                        <button onClick={() => handleMobileLinkClick('home')} className="p-3 text-lg font-medium text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Home</button>
                                        <button onClick={() => handleMobileLinkClick('category')} className="p-3 text-lg font-medium text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Shop</button>
                                        <a href="#" className="p-3 text-lg font-medium text-left block rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
                                        <a href="#" className="p-3 text-lg font-medium text-left block rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
                                    </nav>
                                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                                        <button onClick={() => handleMobileLinkClick('login')} className="flex items-center space-x-3 p-3 w-full text-left rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                            {ICONS['user']}
                                            <span className="text-lg font-medium">Account</span>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                 </div>
            )}
        </>
    );
};

export default Header;