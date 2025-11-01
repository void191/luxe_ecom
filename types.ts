
export interface Product {
    id: number;
    name: string;
    category: 'Apparel' | 'Footwear' | 'Accessories' | 'Gear';
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    images: string[];
    description: string;
    details: string[];
}

export interface CartItem extends Product {
    quantity: number;
}

export interface Review {
    id: number;
    productId: number;
    author: string;
    rating: number;
    comment: string;
    date: string;
}

export type Page = 'home' | 'category' | 'product' | 'checkout' | 'login' | 'register' | 'wishlist';