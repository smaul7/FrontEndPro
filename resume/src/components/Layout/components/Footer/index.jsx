import styles from "./Footer.module.css"

import { Layout } from 'antd';
const { Footer: AntFooter } = Layout;

const Footer = () => (
    <div className={styles.footerContainer}>
  <AntFooter style={{ textAlign: 'center' }}>
    Контакти: 9092741@gmail.com | https://github.com/smaul7 | LinkedIn(нєту)
  </AntFooter>
  </div>
);

export default Footer;
