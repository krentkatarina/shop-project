import React, { useState, useEffect } from "react";
import AppRoutes from "../routes/routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import UserForm from "../User/UserForm";
import styles from "../../styles//Load.module.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.load}>
          <div>G</div>
          <div>N</div>
          <div>I</div>
          <div>D</div>
          <div>A</div>
          <div>O</div>
          <div>L</div>
        </div>
      ) : (
        <div className="app">
          <Header />
          <UserForm />

          <div className="container">
            <Sidebar />
            <AppRoutes />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
