import styles from './App.module.css'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

    return (
        <div className={styles.app}>
            <Header/>
            <Content/>
            <Footer/>

        </div>
    )
}

export default App
