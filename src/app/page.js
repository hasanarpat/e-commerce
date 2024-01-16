import Image from 'next/image';
import styles from './page.module.css';
import Poster from '@/components/poster/Poster';

export const metadata = {
  title: 'Crow | Official Store',
  description: 'Developed by Crow',
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Poster />
    </main>
  );
}
