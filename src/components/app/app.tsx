import {Route, Routes} from "react-router-dom";
import styles from "./app.module.css";

import Header from './../header/header';
import Footer from './../footer/footer';

import PageNotFound from './../../pages/page-not-found/page-not-fount';
import PageHome from './../../pages/page-home/page-home';

function App() {

  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<PageHome/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
