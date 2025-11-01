
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import ProductCard from '../ProductCard';
import Button from '../common/Button';

const HomePage: React.FC = () => {
    const { products, setPage } = useContext(AppContext);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const featuredProducts = products.slice(0, 4);

    return (
        <div className="animate-fade-in">
            {/* Parallax Hero Section */}
            <div className="relative h-[60vh] md:h-[80vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{
                        backgroundImage: `url('https://picsum.photos/id/1015/1920/1080')`,
                        transform: `translateY(${scrollY * 0.4}px)`,
                    }}
                />
                <div className="absolute inset-0 bg-black opacity-50" />
                <div className="relative z-10 p-4 animate-fade-in-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Engineered for Adventure
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
                        Discover premium outdoor gear designed to withstand the elements and elevate your experience.
                    </p>
                    <Button onClick={() => setPage('category')} size="lg" className="mt-8">
                        Shop Now
                    </Button>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="py-16 sm:py-24 bg-light-bg dark:bg-dark-bg">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-light-text dark:text-dark-text">
                            Featured Products
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-light-subtle dark:text-dark-subtle">
                            Handpicked selections from our latest collection.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
