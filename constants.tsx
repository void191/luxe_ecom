import React from 'react';
import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
    {
        id: 1, name: 'Quantum-Flux Hiking Boots', category: 'Footwear', price: 199.99, originalPrice: 249.99, rating: 4.8, reviewCount: 215,
        images: ['https://picsum.photos/id/20/800/800', 'https://picsum.photos/id/21/800/800', 'https://picsum.photos/id/22/800/800', 'https://picsum.photos/id/23/800/800'],
        description: 'Engineered for the most demanding trails, the Quantum-Flux boots feature a responsive sole that adapts to any terrain. Waterproof, breathable, and built to last.',
        details: ['Adaptive-grip sole technology', 'GORE-TEX waterproof membrane', 'OrthoLite insole for superior comfort', 'Reinforced toe cap and heel counter'],
    },
    {
        id: 2, name: 'Aero-Mesh Ventilated Tee', category: 'Apparel', price: 65.00, rating: 4.6, reviewCount: 150,
        images: ['https://picsum.photos/id/30/800/800', 'https://picsum.photos/id/31/800/800', 'https://picsum.photos/id/32/800/800'],
        description: 'Stay cool and dry with our Aero-Mesh Ventilated Tee. The ultra-lightweight fabric wicks away sweat, providing maximum airflow during intense workouts.',
        details: ['Moisture-wicking polyester blend', 'Strategically placed mesh panels', 'Athletic fit for full range of motion', 'Reflective logos for low-light visibility'],
    },
    {
        id: 3, name: 'Nomad All-Weather Backpack', category: 'Gear', price: 120.50, originalPrice: 150.00, rating: 4.9, reviewCount: 302,
        images: ['https://picsum.photos/id/40/800/800', 'https://picsum.photos/id/41/800/800', 'https://picsum.photos/id/42/800/800'],
        description: 'The Nomad backpack is your perfect companion for urban exploration or wilderness adventures. Its durable, water-resistant shell protects your gear in any condition.',
        details: ['30L capacity with multiple compartments', 'Padded laptop sleeve (fits up to 15")', 'Ergonomic shoulder straps and back panel', 'Integrated rain cover'],
    },
    {
        id: 4, name: 'Chrono-Pulse Smartwatch', category: 'Accessories', price: 349.00, rating: 4.7, reviewCount: 450,
        images: ['https://picsum.photos/id/50/800/800', 'https://picsum.photos/id/51/800/800', 'https://picsum.photos/id/52/800/800'],
        description: 'Track your fitness, stay connected, and conquer your day. The Chrono-Pulse features advanced health monitoring, GPS, and a vibrant, always-on display.',
        details: ['Titanium casing with sapphire glass', '14-day battery life', 'Heart rate, SpO2, and sleep tracking', 'NFC payments and music storage'],
    },
    {
        id: 5, name: 'Stealth-Flex Running Shorts', category: 'Apparel', price: 55.00, rating: 4.5, reviewCount: 98,
        images: ['https://picsum.photos/id/60/800/800', 'https://picsum.photos/id/61/800/800'],
        description: 'Unleash your speed with the Stealth-Flex shorts. A 4-way stretch fabric moves with you, while a secure zip pocket holds your essentials.',
        details: ['7" inseam', 'Lightweight and quick-drying', 'Built-in liner for support', 'Zippered back pocket'],
    },
    {
        id: 6, name: 'Terra-Grip Trail Runners', category: 'Footwear', price: 145.00, rating: 4.7, reviewCount: 189,
        images: ['https://picsum.photos/id/70/800/800', 'https://picsum.photos/id/71/800/800', 'https://picsum.photos/id/72/800/800'],
        description: 'Dominate any trail with the Terra-Grip runners. Aggressive lugs provide unmatched traction, and a rock plate protects your feet from sharp objects.',
        details: ['Vibram Megagrip outsole', 'Lightweight EVA foam midsole', 'Breathable mesh upper with TPU overlays', 'Gaiter attachment points'],
    },
    {
        id: 7, name: 'Polar-Shield Down Jacket', category: 'Apparel', price: 299.99, originalPrice: 350.00, rating: 4.9, reviewCount: 256,
        images: ['https://picsum.photos/id/80/800/800', 'https://picsum.photos/id/81/800/800', 'https://picsum.photos/id/82/800/800'],
        description: 'Stay warm in the coldest conditions. The Polar-Shield jacket is filled with 800-fill power responsibly sourced down for exceptional warmth-to-weight ratio.',
        details: ['800-fill power hydrophobic down', 'Durable water-repellent (DWR) finish', 'Helmet-compatible hood', 'Packs into its own pocket'],
    },
    {
        id: 8, name: 'Apex Carbon Trekking Poles', category: 'Gear', price: 160.00, rating: 4.8, reviewCount: 120,
        images: ['https://picsum.photos/id/90/800/800', 'https://picsum.photos/id/91/800/800'],
        description: 'Lighten your load without sacrificing strength. The Apex trekking poles are made from 100% carbon fiber, featuring comfortable cork grips and a quick-lock system.',
        details: ['Ultralight carbon fiber construction', 'Ergonomic cork grips', 'Adjustable from 65cm to 135cm', 'Includes snow and mud baskets'],
    },
];

export const REVIEWS: Review[] = [
    {id: 1, productId: 1, author: 'Alex R.', rating: 5, date: '2023-08-15', comment: 'Absolutely solid boots. Took them on a 5-day trek and my feet were comfortable and dry the entire time. The grip is insane!'},
    {id: 2, productId: 1, author: 'Samantha B.', rating: 4, date: '2023-08-10', comment: 'Great boots, very supportive. They took a couple of short walks to break in, but now they fit like a glove. A bit pricey but worth it.'},
    {id: 3, productId: 2, author: 'Mike P.', rating: 5, date: '2023-09-01', comment: 'Perfect for my gym sessions. So light and breathable I barely notice I\'m wearing it. Will be buying more colors.'},
    {id: 4, productId: 4, author: 'Jessica W.', rating: 5, date: '2023-09-20', comment: 'Switched from an Apple Watch and I\'m blown away. The battery life is a game changer and it has all the features I need. Looks fantastic too!'},
    {id: 5, productId: 4, author: 'Tom H.', rating: 4, date: '2023-09-18', comment: 'Very capable watch. The app selection is a bit limited compared to others, but the core fitness tracking is top-notch. The build quality is amazing.'},
];

export const ICONS: { [key: string]: React.ReactNode } = {
    'logo': <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    'sun': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>,
    'moon': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>,
    'search': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
    'user': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    'heart': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    'cart': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.16"/></svg>,
    'chevron-down': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
    'x': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
    'plus': <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>,
    'minus': <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>,
    'trash': <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>,
    'menu': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
};