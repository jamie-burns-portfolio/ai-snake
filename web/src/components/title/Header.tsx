import styles from './header.module.css';
import { HeaderProps } from './types';
const Header: React.FC<HeaderProps> = (props: any) => {
    const {score } = props;
    return (
        <header className={styles.header}>
        <h1 className={styles.title}>AI Snake</h1>
        <div className={styles.score}>Score: {score}</div>
        </header>
    );
};

export default Header;