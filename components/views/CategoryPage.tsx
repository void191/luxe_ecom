import React, { useContext, useState, useMemo } from 'react';
import { AppContext } from '../../context/AppContext';
import { Product } from '../../types';
import ProductCard from '../ProductCard';
import { ICONS } from '../../constants';

const CategoryPage: React.FC = () => {
    const { products } = useContext(AppContext);
    const [sortOption, setSortOption] = useState<string>('featured');
    const [filters, setFilters] = useState<{ category: string[] }>({ category: [] });

    const handleCategoryFilter = (category: string) => {
        setFilters(prev => {
            const newCategories = prev.category.includes(category)
                ? prev.category.filter(c => c !== category)
                : [...prev.category, category];
            return { ...prev, category: newCategories };
        });
    };

    const filteredAndSortedProducts = useMemo(() => {
        let result: Product[] = [...products];
        
        // Filter
        if (filters.category.length > 0) {
            result = result.filter(p => filters.category.includes(p.category));
        }

        // Sort
        switch (sortOption) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'discount':
                result.sort((a, b) => {
                    const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
                    const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
                    return discountB - discountA;
                });
                break;
            default: // featured (no sort)
                break;
        }

        return result;
    }, [products, sortOption, filters]);

    const categories = [...new Set(products.map(p => p.category))];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight">Shop Collection</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-light-subtle dark:text-dark-subtle">
                    Explore our curated collection of high-performance gear and apparel.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Filters */}
                <aside className="w-full lg:w-1/4">
                    <h2 className="text-lg font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Filters</h2>
                    <div>
                        <h3 className="font-medium mb-2">Category</h3>
                        <div className="space-y-2">
                            {categories.map(cat => (
                                <label key={cat} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                        checked={filters.category.includes(cat)}
                                        onChange={() => handleCategoryFilter(cat)}
                                    />
                                    <span className="ml-3 text-sm">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="w-full lg:w-3/4">
                    <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-light-subtle dark:text-dark-subtle">{filteredAndSortedProducts.length} Products</p>
                        <div className="flex items-center">
                            <label htmlFor="sort" className="mr-2 text-sm">Sort by:</label>
                            <select
                                id="sort"
                                value={sortOption}
                                // FIX: Use e.target.value instead of e.currentTarget.value.
                                // For a select element's change event, e.target is correctly typed,
                                // whereas e.currentTarget can be a generic EventTarget, causing a type error.
                                onChange={(e) => setSortOption(e.target.value)}
                                className="bg-light-bg dark:bg-dark-bg border border-gray-300 dark:border-gray-600 rounded-md py-1.5 pl-3 pr-8 text-sm focus:ring-primary-500 focus:border-primary-500"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                                <option value="discount">Discount: High to Low</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                        {filteredAndSortedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CategoryPage;