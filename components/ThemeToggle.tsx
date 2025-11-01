
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ICONS } from '../constants';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useContext(AppContext);

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-light-subtle dark:text-dark-subtle hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? ICONS['moon'] : ICONS['sun']}
        </button>
    );
};

export default ThemeToggle;
