
import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/views/HomePage';
import CategoryPage from './components/views/CategoryPage';
import ProductDetailPage from './components/views/ProductDetailPage';
import CheckoutPage from './components/views/CheckoutPage';
import AuthPage from './components/views/AuthPage';
import CartDrawer from './components/CartDrawer';
import WishlistPage from './components/views/WishlistPage';

const App: React.FC = () => {
    const { page, selectedProductId } = useContext(AppContext);

    const renderPage = () => {
        switch (page) {
            case 'home':
                return <HomePage />;
            case 'category':
                return <CategoryPage />;
            case 'product':
                return selectedProductId ? <ProductDetailPage productId={selectedProductId} /> : <CategoryPage />;
            case 'checkout':
                return <CheckoutPage />;
            case 'wishlist':
                return <WishlistPage />;
            case 'login':
            case 'register':
                return <AuthPage initialTab={page} />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
            <CartDrawer />
        </div>
    );
};

export default App;