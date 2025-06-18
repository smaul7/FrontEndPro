import styles from "./Header.module.css"
import { Menu } from 'antd';
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location?.pathname || "/";
  const currentKey = pathname === "/" ? "home" : pathname.replace("/", "");

  return (
    <div className={styles.headerContainer}>
    <Menu mode="horizontal" theme="dark" selectedKeys={[currentKey]}>
      <Menu.Item key="home">
        <NavLink to="/">Головна</NavLink>
      </Menu.Item>
      <Menu.Item key="sertificates">
        <NavLink to="sertificates">Сертифікати</NavLink>
      </Menu.Item>
    </Menu>
    </div>
  );
};

export default Header;
