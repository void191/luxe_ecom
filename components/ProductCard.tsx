
import React, { useContext } from 'react';
import { Product } from '../types';
import { AppContext } from '../context/AppContext';
import StarRating from './common/StarRating';
import Button from './common/Button';
import { ICONS } from '../constants';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { selectProduct, addToCart, addToWishlist, removeFromWishlist, isProductInWishlist } = useContext(AppContext);
    const inWishlist = isProductInWishlist(product.id);

    const handleWishlistToggle = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent card click navigation
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product.id);
        }
    };

    return (
        <div className="group relative flex flex-col bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
            <div className="relative overflow-hidden cursor-pointer" onClick={() => selectProduct(product.id)}>
                <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                {product.originalPrice && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">SALE</span>
                )}
                 <button 
                    onClick={handleWishlistToggle}
                    className="absolute top-3 right-3 z-10 p-2 rounded-full bg-light-card/80 dark:bg-dark-card/80 backdrop-blur-sm hover:bg-light-card dark:hover:bg-dark-card transition-colors"
                    aria-label="Toggle Wishlist"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${inWishlist ? 'text-red-500' : 'text-light-subtle dark:text-dark-subtle'} transition-colors`}>
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                </button>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-light-subtle dark:text-dark-subtle uppercase tracking-wider">{product.category}</p>
                <h3 className="mt-1 font-semibold text-lg text-light-text dark:text-dark-text truncate cursor-pointer" onClick={() => selectProduct(product.id)}>
                    {product.name}
                </h3>
                <div className="mt-2 flex items-center">
                    <StarRating rating={product.rating} />
                    <span className="ml-2 text-sm text-light-subtle dark:text-dark-subtle">({product.reviewCount})</span>
                </div>
                <div className="mt-3 flex items-baseline flex-grow">
                    <span className="text-xl font-bold text-primary-600 dark:text-primary-400">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                        <span className="ml-2 text-sm text-light-subtle dark:text-dark-subtle line-through">${product.originalPrice.toFixed(2)}</span>
                    )}
                </div>
                <div className="mt-4">
                     <Button variant="outline" size="md" className="w-full" onClick={() => addToCart(product)}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;