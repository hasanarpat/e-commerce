import Link from 'next/link';
import styles from './navbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { BsBalloonHeart } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="64px"
            height="64px"
            fill="none"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <div className={styles.categories}>
        <Link
          href="/"
          className={styles.link}
        >
          New Products and Suggestions
        </Link>
        <Link
          href="/"
          className={styles.link}
        >
          Male
        </Link>
        <Link
          href="/"
          className={styles.link}
        >
          Female
        </Link>
        <Link
          href="/"
          className={styles.link}
        >
          Kids
        </Link>
        <Link
          href="/"
          className={styles.link}
        >
          Discounts
        </Link>
      </div>
      <div className={styles.actions}>
        <div className={styles.inputSection}>
          <div className={styles.inputContainer}>
            <div className={styles.searchIconContainer}>
              <BsSearch className={styles.searchIcon} />
            </div>
            <input
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <Link href="/favorites">
          <div className={styles.iconContainer}>
            <BsBalloonHeart className={styles.icon} />
          </div>
        </Link>
        <Link href="/cart">
          <div className={`${styles.iconContainer} ${styles.cartContainer}`}>
            <FiShoppingCart className={styles.icon} />
            <span className={styles.cartCounter}>1</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
