'use client';
import Link from 'next/link';
import styles from './adsBar.module.css';
import { useEffect, useRef, useState } from 'react';

const ads = [
  {
    id: 1,
    title: 'New Skateboard Selection',
    path: '/news',
  },
  {
    id: 2,
    title: 'Shipping around world',
    path: '/news',
  },
  {
    id: 3,
    title: 'Winter/Spring',
    path: '/news',
  },
];

const AdsBar = () => {
  const [content, setContent] = useState(0);
  const [direction, setDirection] = useState('right');
  const listRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // let distance = listRef.current.getBoundingClientRect().x - 32;

      setContent((prev) => (prev == 2 ? 0 : prev + 1));

      switch (content) {
        case 2:
          setDirection('left');
          break;
        case 0:
          setDirection('right');
          break;

        default:
          setDirection('right');
          break;
      }

      listRef.current.style.transform = `translateX(${
        direction == 'right' ? '-100vw' : '100vw'
      })`;
    }, 3000);
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.container}
      ref={listRef}
    >
      {ads.map((item) => (
        <div key={ads[content].path}>
          <div className={styles.content}>
            <p className={styles.title}>{ads[content].title}</p>
            <Link
              href={ads[content].path}
              className={styles.link}
            >
              Review
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdsBar;
