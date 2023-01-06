import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css'
import { menuItems } from '../helpers/getNavItems';

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({ text, href }) => (
          <ActiveLink key={href} text={text} href={href} />
        ))
      }
    </nav>
  );
}
