import Image from 'next/image';
import styles from './poster.module.css';
import Link from 'next/link';

const Poster = () => {
  return (
    <>
      <div className={styles.desktopContainer}>
        <div className={styles.desc}>
          <div className={styles.model}>
            <p className={styles.title}>Nike Style By</p>
            <h1 className={styles.subTitle}>NIKE V2K RUN</h1>
          </div>
          <p>Notice the retro inspired sneaker</p>
          <Link
            href="/"
            className={styles.link}
          >
            Inspect
          </Link>
        </div>
      </div>
      <div className={styles.mobileContainer}>
        <div className={styles.desc}>
          <div className={styles.model}>
            <p>Nike Style By</p>
            <p>NIKE V2K RUN</p>
          </div>
          <p>Notice the retro inspired sneaker</p>
          <Link
            href="/"
            className={styles.link}
          >
            Inspect
          </Link>
        </div>
      </div>
    </>
  );
};

export default Poster;
