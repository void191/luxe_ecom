
import React, { useState, FormEvent } from 'react';
import Button from '../common/Button';

interface AuthPageProps {
    initialTab: 'login' | 'register';
}

const AuthPage: React.FC<AuthPageProps> = ({ initialTab }) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        alert('Login functionality is not implemented in this demo.');
    };

    const handleRegister = (e: FormEvent) => {
        e.preventDefault();
        alert('Registration functionality is not implemented in this demo.');
    };

    return (
        <div className="min-h-[60vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
            <div className="max-w-md w-full space-y-8 bg-light-card dark:bg-dark-card p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div>
                    <h2 className="text-center text-3xl font-extrabold">
                        {activeTab === 'login' ? 'Sign in to your account' : 'Create a new account'}
                    </h2>
                </div>
                
                <div className="flex border-b border-gray-200 dark:border-gray-700">
                    <button 
                        onClick={() => setActiveTab('login')}
                        className={`w-1/2 py-4 text-sm font-medium transition-colors ${activeTab === 'login' ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400' : 'text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text'}`}
                    >
                        Login
                    </button>
                    <button 
                        onClick={() => setActiveTab('register')}
                        className={`w-1/2 py-4 text-sm font-medium transition-colors ${activeTab === 'register' ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400' : 'text-light-subtle dark:text-dark-subtle hover:text-light-text dark:hover:text-dark-text'}`}
                    >
                        Register
                    </button>
                </div>

                {activeTab === 'login' ? (
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address-login" className="sr-only">Email address</label>
                                <input id="email-address-login" name="email" type="email" required className="input-field rounded-t-md" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password-login" className="sr-only">Password</label>
                                <input id="password-login" name="password" type="password" required className="input-field rounded-b-md" placeholder="Password" />
                            </div>
                        </div>
                        <Button type="submit" size="lg" className="w-full">Sign in</Button>
                    </form>
                ) : (
                    <form className="mt-8 space-y-6" onSubmit={handleRegister}>
                        <div className="rounded-md shadow-sm -space-y-px">
                             <div>
                                <label htmlFor="name-register" className="sr-only">Full Name</label>
                                <input id="name-register" name="name" type="text" required className="input-field rounded-t-md" placeholder="Full Name" />
                            </div>
                            <div>
                                <label htmlFor="email-address-register" className="sr-only">Email address</label>
                                <input id="email-address-register" name="email" type="email" required className="input-field" placeholder="Email address" />
                            </div>
                            <div>
                                <label htmlFor="password-register" className="sr-only">Password</label>
                                <input id="password-register" name="password" type="password" required className="input-field rounded-b-md" placeholder="Password" />
                            </div>
                        </div>
                        <Button type="submit" size="lg" className="w-full">Create Account</Button>
                    </form>
                )}
            </div>
            <style>{`
                .input-field {
                    position: relative;
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #d1d5db; /* gray-300 */
                    background-color: transparent;
                    -webkit-appearance: none;
                    appearance: none;
                }
                .dark .input-field {
                     border-color: #4b5563; /* gray-600 */
                }
                .input-field:focus {
                    outline: none;
                    border-color: #3b82f6; /* primary-500 */
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
                    z-index: 10;
                }
            `}</style>
        </div>
    );
};

export default AuthPage;
