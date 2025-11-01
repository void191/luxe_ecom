
import React, { useContext, useState, useMemo } from 'react';
import { AppContext } from '../../context/AppContext';
import { REVIEWS } from '../../constants';
import ImageGallery from '../ImageGallery';
import StarRating from '../common/StarRating';
import Button from '../common/Button';

interface ProductDetailPageProps {
    productId: number;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId }) => {
    const { products, addToCart, isProductInWishlist, addToWishlist, removeFromWishlist } = useContext(AppContext);
    const [quantity, setQuantity] = useState(1);
    
    const product = useMemo(() => products.find(p => p.id === productId), [products, productId]);
    const reviews = useMemo(() => REVIEWS.filter(r => r.productId === productId), [productId]);
    
    const inWishlist = useMemo(() => product ? isProductInWishlist(product.id) : false, [product, isProductInWishlist]);

    if (!product) {
        return <div className="text-center py-20">Product not found.</div>;
    }

    const handleWishlistToggle = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product.id);
        }
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <ImageGallery images={product.images} productName={product.name} />
                
                <div>
                    <p className="text-sm uppercase tracking-widest text-primary-500 font-semibold">{product.category}</p>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2">{product.name}</h1>
                    
                    <div className="mt-4 flex items-center">
                        <StarRating rating={product.rating} />
                        <span className="ml-3 text-light-subtle dark:text-dark-subtle">({product.reviewCount} reviews)</span>
                    </div>

                    <div className="mt-6 flex items-baseline gap-3">
                        <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">${product.price.toFixed(2)}</span>
                         {product.originalPrice && (
                            <span className="text-xl text-light-subtle dark:text-dark-subtle line-through">${product.originalPrice.toFixed(2)}</span>
                        )}
                    </div>

                    <p className="mt-6 text-base text-light-subtle dark:text-dark-subtle leading-relaxed">{product.description}</p>
                    
                    <div className="mt-8 flex items-center space-x-4">
                        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                           <button onClick={() => setQuantity(q => Math.max(1, q-1))} className="p-3">-</button>
                           <span className="px-4">{quantity}</span>
                           <button onClick={() => setQuantity(q => q+1)} className="p-3">+</button>
                        </div>
                         <Button size="lg" onClick={() => addToCart(product, quantity)} className="flex-1">Add to Cart</Button>
                         <button
                            onClick={handleWishlistToggle}
                            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle Wishlist"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${inWishlist ? 'text-red-500' : 'text-light-subtle dark:text-dark-subtle'} transition-colors`}>
                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                            </svg>
                        </button>
                    </div>

                    <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
                         <h3 className="font-semibold text-lg mb-4">Product Details</h3>
                         <ul className="list-disc list-inside space-y-2 text-light-subtle dark:text-dark-subtle">
                             {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
                         </ul>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-2xl font-bold border-b border-gray-200 dark:border-gray-700 pb-4 mb-8">Customer Reviews</h2>
                <div className="space-y-8">
                    {reviews.length > 0 ? reviews.map(review => (
                        <div key={review.id} className="p-6 bg-light-card dark:bg-dark-card rounded-lg border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-2">
                                <StarRating rating={review.rating} />
                                <p className="ml-auto text-sm text-light-subtle dark:text-dark-subtle">{review.date}</p>
                            </div>
                            <p className="font-semibold">{review.author}</p>
                            <p className="mt-2 text-light-subtle dark:text-dark-subtle">{review.comment}</p>
                        </div>
                    )) : <p>No reviews yet for this product.</p>}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;