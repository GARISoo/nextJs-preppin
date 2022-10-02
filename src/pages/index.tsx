import { faCheckCircle, faClock, faFlag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Dashboard from "../components/Dashboard/Dashboard";
import config from '../config';
import { CategoryProps } from '../models/Category';

import styles from './styles.module.scss';

export type Props = {
  categories: CategoryProps[];
};

const Home: NextPage = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([])

  const fetchCategories = async () => {
    const data = await fetch(
      `${config.baseUrl}/api/category?limit=4`
    ).then((res) => res.json());

    setCategories(data.categories)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img className={styles.profileImg} src='cat.jpg' alt='img' />
        <div className={styles.profileDesc}>
          <div className={styles.profileHead}>
            <h2>User username</h2>
            <span>Bonus booster 69x</span>
            <span>progress bar</span>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.infoBox}>
              <FontAwesomeIcon icon={faFlag} className={styles.faIcon} />
              <div className={styles.results}>
                <span>27</span>
                <span>Quiz passed</span>
              </div>
            </div>
            <div className={styles.infoBox}>
              <FontAwesomeIcon icon={faClock} className={styles.faIcon} />
              <div className={styles.results}>
                <span>27min</span>
                <span>Fastest time</span>
              </div>
            </div>
            <div className={styles.infoBox}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.faIcon} />
              <div className={styles.results}>
                <span>200</span>
                <span>Correct answers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.box}>
          <div className={styles.boxHeader}>
            <h3>Achievements</h3>
            Progress Bar
          </div>
          <div className={styles.boxBody}>
            <div className={styles.achievementsWrapper}>
              Achievements
            </div>
            <hr />
            <span>View All</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxHeader}>
            <h3>Featured Category</h3>
            <Link href='/category'>
              <a>View All</a>
            </Link>
          </div>
          <div className={styles.categoryWrapper}>
            {categories.length ? (
              categories.map(({ title, _id, img }) => (
                <div key={_id} className={styles.category}>
                  <span className={styles.topic}>{title}</span>
                  <img className={styles.img} src={img} alt="img" />
                </div>
              ))
            ) : (
              <h2>No categories found..</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
