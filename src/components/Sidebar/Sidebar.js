import React from "react";

import styles from '../../styles/Sidebar.module.css'
import { NavLink } from "react-router-dom";
import { categoriesMockValues as list } from "../Categories/CategoriesMockValues";


const Sidebar = () => {
    return (
       <section className={styles.sidebar}>
            <div className={styles.title}>CATEGORIES</div>
            <nav>
                <ul className={styles.menu}>
                    {list.map(({id, name, }) =>(
                        <li key={id}>
                               <NavLink
                                    className={({ isActive }) =>
                                    `${styles.link} ${isActive ? styles.active : ""}`
                                    }
                                    to={`/categories/${id}`}
                                >
                                    {name}
                                </NavLink>
                        </li>
                    ))}
                    
                </ul>
            </nav>
            <div className={styles.footer}>
                <div title="stuff.support@mail.ru" className={styles.help}>
                    Help
                </div>
            </div>
       </section> 
    ) 
}

export default Sidebar;