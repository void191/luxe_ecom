import React, { createContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { Product, CartItem, Page } from '../types';
import { PRODUCTS } from '../constants';

interface AppContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    page: Page;
    setPage: (page: Page) => void;
    selectedProductId: number | null;
    selectProduct: (id: number) => void;
    cart: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    cartCount: number;
    cartTotal: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
    products: Product[];
    wishlist: number[];
    addToWishlist: (productId: number) => void;
    removeFromWishlist: (productId: number) => void;
    isProductInWishlist: (productId: number) => boolean;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    searchResults: Product[];
}

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [page, setPage] = useState<Page>('home');
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
    const [products] = useState<Product[]>(PRODUCTS);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (storedTheme) {
            setTheme(storedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }

        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            setWishlist(JSON.parse(storedWishlist));
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const toggleTheme = useCallback(() => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }, []);
    
    const navigateToPage = useCallback((newPage: Page) => {
        setPage(newPage);
        window.scrollTo(0, 0);
    }, []);

    const selectProduct = useCallback((id: number) => {
        setSelectedProductId(id);
        navigateToPage('product');
        setSearchQuery('');
    }, [navigateToPage]);

    const addToCart = useCallback((product: Product, quantity: number = 1) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prevCart, { ...product, quantity }];
        });
        setIsCartOpen(true);
    }, []);

    const removeFromCart = useCallback((productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }, []);

    const updateQuantity = useCallback((productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart(prevCart =>
                prevCart.map(item => (item.id === productId ? { ...item, quantity } : item))
            );
        }
    }, [removeFromCart]);

    const addToWishlist = useCallback((productId: number) => {
        setWishlist(prev => [...prev, productId]);
    }, []);

    const removeFromWishlist = useCallback((productId: number) => {
        setWishlist(prev => prev.filter(id => id !== productId));
    }, []);



    const isProductInWishlist = useCallback((productId: number): boolean => {
        return wishlist.includes(productId);
    }, [wishlist]);

    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) {
            return [];
        }
        const lowercasedQuery = searchQuery.toLowerCase();
        return products.filter(product =>
            product.name.toLowerCase().includes(lowercasedQuery) ||
            product.category.toLowerCase().includes(lowercasedQuery) ||
            product.description.toLowerCase().includes(lowercasedQuery)
        );
    }, [searchQuery, products]);

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const contextValue: AppContextType = {
        theme,
        toggleTheme,
        page,
        setPage: navigateToPage,
        selectedProductId,
        selectProduct,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        products,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isProductInWishlist,
        searchQuery,
        setSearchQuery,
        searchResults,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};