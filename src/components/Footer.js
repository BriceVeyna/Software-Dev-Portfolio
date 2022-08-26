import React from 'react';

const styles = {
    card: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
    },
};

function Footer() {
    return (
        <footer className='text-center' style={styles.card}>
            <h5>&copy; 2022 Brice Veyna</h5>
        </footer>
    );
}

export default Footer;