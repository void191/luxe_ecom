
import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import { ICONS } from '../constants';
import Button from './common/Button';
import { CartItem } from '../types';

const CartDrawer: React.FC = () => {
    const { isCartOpen, setIsCartOpen, cart, cartTotal, cartCount, removeFromCart, updateQuantity, setPage } = useContext(AppContext);
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                setIsCartOpen(false);
            }
        };
        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen, setIsCartOpen]);
    
    const handleCheckout = () => {
        setIsCartOpen(false);
        setPage('checkout');
    }

    if (!isCartOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in">
            <div ref={drawerRef} className="fixed top-0 right-0 h-full w-full max-w-md bg-light-bg dark:bg-dark-bg shadow-2xl flex flex-col animate-slide-in-right">
                <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                    <h2 className="text-xl font-semibold">Shopping Cart ({cartCount})</h2>
                    <button onClick={() => setIsCartOpen(false)} className="text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text">{ICONS['x']}</button>
                </div>

                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center flex-grow p-6 text-center">
                        <div className="w-24 h-24 text-gray-300 dark:text-gray-600">{ICONS['cart']}</div>
                        <p className="mt-4 text-lg font-medium">Your cart is empty</p>
                        <p className="mt-2 text-sm text-light-subtle dark:text-dark-subtle">Looks like you haven't added anything yet.</p>
                        <Button onClick={() => { setIsCartOpen(false); setPage('category'); }} className="mt-6" variant="primary">Continue Shopping</Button>
                    </div>
                ) : (
                    <>
                        <div className="flex-grow overflow-y-auto p-6">
                            <ul className="space-y-4">
                                {cart.map(item => (
                                    <CartDrawerItem key={item.id} item={item} onUpdate={updateQuantity} onRemove={removeFromCart} />
                                ))}
                            </ul>
                        </div>
                        <div className="p-6 border-t border-gray-200 dark:border-gray-800">
                            <div className="flex justify-between items-center font-semibold">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <p className="text-sm text-light-subtle dark:text-dark-subtle mt-1">Shipping and taxes calculated at checkout.</p>
                            <Button onClick={handleCheckout} className="w-full mt-4" size="lg">
                                Proceed to Checkout
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

interface CartDrawerItemProps {
    item: CartItem;
    onUpdate: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

const CartDrawerItem: React.FC<CartDrawerItemProps> = ({ item, onUpdate, onRemove }) => (
    <li className="flex items-start space-x-4">
        <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
        <div className="flex-1">
            <h3 className="font-semibold text-sm">{item.name}</h3>
            <p className="text-sm text-light-subtle dark:text-dark-subtle">${item.price.toFixed(2)}</p>
            <div className="flex items-center mt-2">
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-md">
                    <button onClick={() => onUpdate(item.id, item.quantity - 1)} className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-l-md">{ICONS['minus']}</button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button onClick={() => onUpdate(item.id, item.quantity + 1)} className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-r-md">{ICONS['plus']}</button>
                </div>
                <button onClick={() => onRemove(item.id)} className="ml-auto text-light-subtle dark:text-dark-subtle hover:text-red-500 transition-colors">{ICONS['trash']}</button>
            </div>
        </div>
    </li>
);

export default CartDrawer;
