
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../common/Button';

const CheckoutPage: React.FC = () => {
    const { cart, cartTotal, cartCount } = useContext(AppContext);

    if (cart.length === 0) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
                <h1 className="text-3xl font-bold">Your cart is empty.</h1>
                <p className="mt-4 text-lg text-light-subtle dark:text-dark-subtle">You can't proceed to checkout without any items.</p>
            </div>
        );
    }
    
    const shippingCost = 5.00;
    const tax = cartTotal * 0.08;
    const total = cartTotal + shippingCost + tax;

    return (
        <div className="bg-light-bg dark:bg-dark-bg py-12 sm:py-16 animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight">Checkout</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Shipping & Payment Form */}
                    <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg border border-gray-200 dark:border-gray-700">
                        <form className="space-y-6">
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input type="text" placeholder="First Name" className="input-field" />
                                    <input type="text" placeholder="Last Name" className="input-field" />
                                    <input type="email" placeholder="Email Address" className="input-field sm:col-span-2" />
                                    <input type="text" placeholder="Address" className="input-field sm:col-span-2" />
                                    <input type="text" placeholder="City" className="input-field" />
                                    <input type="text" placeholder="State / Province" className="input-field" />
                                    <input type="text" placeholder="Zip / Postal Code" className="input-field" />
                                    <input type="text" placeholder="Country" className="input-field" />
                                </div>
                            </div>
                             <div>
                                <h2 className="text-xl font-semibold mb-4 mt-8">Payment Details</h2>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Card Number" className="input-field" />
                                     <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="MM / YY" className="input-field" />
                                        <input type="text" placeholder="CVC" className="input-field" />
                                     </div>
                                </div>
                            </div>
                            <Button size="lg" className="w-full mt-6" type="submit">
                                Place Order
                            </Button>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg border border-gray-200 dark:border-gray-700 h-fit">
                        <h2 className="text-xl font-semibold mb-6">Order Summary ({cartCount} {cartCount > 1 ? 'items' : 'item'})</h2>
                        <div className="space-y-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={item.images[0]} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-sm text-light-subtle dark:text-dark-subtle">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
                            <div className="flex justify-between"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                            <div className="flex justify-between"><span>Shipping</span><span>${shippingCost.toFixed(2)}</span></div>
                            <div className="flex justify-between"><span>Taxes</span><span>${tax.toFixed(2)}</span></div>
                            <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <style>{`
                .input-field {
                    width: 100%;
                    padding: 0.75rem;
                    border-radius: 0.375rem;
                    border: 1px solid #d1d5db; /* gray-300 */
                    background-color: transparent;
                }
                .dark .input-field {
                     border-color: #4b5563; /* gray-600 */
                }
                .input-field:focus {
                    outline: none;
                    border-color: #3b82f6; /* primary-500 */
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
                }
            `}</style>
        </div>
    );
};

export default CheckoutPage;
