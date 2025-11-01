
import React, { useContext } from 'react';
import { ICONS } from '../constants';
import { AppContext } from '../context/AppContext';

const Footer: React.FC = () => {
    const { setPage } = useContext(AppContext);

    return (
        <footer className="bg-light-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-1">
                         <button onClick={() => setPage('home')} className="flex items-center space-x-2">
                             <div className="bg-gray-900 dark:bg-gray-100 p-1.5 rounded-full">{ICONS['logo']}</div>
                            <span className="text-xl font-bold tracking-tight text-light-text dark:text-dark-text">LuxeMotion</span>
                        </button>
                        <p className="mt-4 text-sm text-light-subtle dark:text-dark-subtle">Premium gear for the modern adventurer.</p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-light-text dark:text-dark-text tracking-wider uppercase">Shop</h3>
                        <ul className="mt-4 space-y-2">
                            <li><button onClick={() => setPage('category')} className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">All Products</button></li>
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">Apparel</a></li>
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">Gear</a></li>
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">Accessories</a></li>
                        </ul>
                    </div>

                     <div>
                        <h3 className="text-sm font-semibold text-light-text dark:text-dark-text tracking-wider uppercase">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">Shipping</a></li>
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">Returns</a></li>
                        </ul>
                    </div>

                     <div>
                        <h3 className="text-sm font-semibold text-light-text dark:text-dark-text tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">About</a></li>
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-sm text-light-subtle dark:text-dark-subtle hover:text-primary-500 transition-colors">Press</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-light-subtle dark:text-dark-subtle">&copy; {new Date().getFullYear()} LuxeMotion. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        {/* Add social icons here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
