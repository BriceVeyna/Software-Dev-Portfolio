import React from 'react';

const styles = {
    card: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        background: "darkBlue",
        color: "antiqueWhite",
    },
};

function Footer() {
    return (
        <footer className='text-center p-3' style={styles.card}>
            <h5>&copy; 2022 Brice Veyna</h5>
        </footer>
    );
}

export default Footer;