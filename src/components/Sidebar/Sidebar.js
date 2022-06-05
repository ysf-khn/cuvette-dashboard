import React from 'react';
import styles from './Sidebar.module.css';

import dashboardSvg from '../../assets/dashboard.svg';
import skillSvg from '../../assets/badge.svg';
import intershipSvg from '../../assets/paper.svg';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <ul>
          <li className={styles.sidebarNavItem}>
            <img src={dashboardSvg} alt='Dashboard' className={styles.svg} />
            <a className={styles.sidebarNavLink} href='!#'>
              Dashboard
            </a>
          </li>
          <li className={`${styles.sidebarNavItem} ${styles.activeNav}`}>
            <img src={skillSvg} alt='Skill Test' className={styles.skillSvg} />
            <a className={styles.sidebarNavLinkActive} href='!#'>
              Skill Test
            </a>
          </li>
          <li className={styles.sidebarNavItem}>
            <img src={intershipSvg} alt='Internships' className={styles.svg} />
            <a className={styles.sidebarNavLink} href='!#'>
              Internships
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
