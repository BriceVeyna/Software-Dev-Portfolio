import React from 'react';

const styles = {
    containerOuter: {
        overflow: 'hidden'
    },
    containerInner: {
        position: 'relative',
        float: 'right',
        right: '50%',
    },
    banner: {
        height: '475px',
        position: 'relative',
        right: '-50%',

    },
    header: {
        position: 'absolute',
        top: '25px',
    }
};

const images = {
    banner: process.env.PUBLIC_URL + '/assets/images/Banner.jpg'
}

function Header() {
    return (
        <header className='jumbotron jumbotron-fluid'>
            <div className='mb-4' style={styles.containerOuter}>
                <div style={styles.containerInner}>
                    <img src={images.banner} alt='Brice Veyna Portrait' style={styles.banner}></img>
                </div>
            </div>
            <div className='container p-4' style={styles.header}>
                <h1 className='display-4'>Software Dev Portfolio</h1>
                <h2 className='display-5'>Brice Veyna</h2>
            </div>
        </header>
    );
}

export default Header;