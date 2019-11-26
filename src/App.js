import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './App.css';

const App = () => {
    return (
        <div className={styles.AppContainer}>
            <Header />
            <Main />
        </div>
    )
}

export default App;