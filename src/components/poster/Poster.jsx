import Image from 'next/image';
import styles from './poster.module.css';
import Link from 'next/link';

const Poster = () => {
  return (
    <div className={styles.container}>
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
  );
};

export default Poster;
