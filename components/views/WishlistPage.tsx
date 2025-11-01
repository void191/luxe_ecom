
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import ProductCard from '../ProductCard';
import Button from '../common/Button';
import { ICONS } from '../../constants';

const WishlistPage: React.FC = () => {
    const { wishlist, products, setPage } = useContext(AppContext);

    const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in min-h-[60vh]">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight">My Wishlist</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-light-subtle dark:text-dark-subtle">
                    Your collection of favorite items.
                </p>
            </div>
            {wishlistedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {wishlistedProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                     <div className="w-24 h-24 text-gray-300 dark:text-gray-600">{ICONS['heart']}</div>
                    <p className="mt-4 text-xl font-medium">Your wishlist is empty.</p>
                    <p className="mt-2 text-light-subtle dark:text-dark-subtle">
                        Add items you love to your wishlist to keep track of them.
                    </p>
                    <Button onClick={() => setPage('category')} className="mt-8">
                        Discover Products
                    </Button>
                </div>
            )}
        </div>
    );
};

export default WishlistPage;
