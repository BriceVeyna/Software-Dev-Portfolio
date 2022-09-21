import React, { useState } from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <Header />
            {renderPage()}
            <Footer />
        </div>
    );
}