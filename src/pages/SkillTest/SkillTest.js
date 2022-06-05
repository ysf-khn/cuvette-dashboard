import React, { useState } from 'react';
import styles from './SkillTest.module.css';

import htmlLogo from '../../assets/html-5.png';
import LineCh from './LineChart';
import DoughnutChart from './DoughnutChart';
import ProgressBar from '../ProgressBar';
import Modal from './Modal';

const initialValues = {
  rank: 12890,
  percentile: 37,
  score: '07',
};

const SkillTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState(initialValues);

  const stats = [
    {
      id: 0,
      icon: '🏆',
      stat: values.rank,
      statName: 'YOUR RANK',
    },
    {
      id: 1,
      icon: '📋',
      stat: `${values.percentile}%`,
      statName: 'PERCENTILE',
    },
    {
      id: 2,
      icon: '✅',
      stat:
        values.score < 10
          ? `${values.score.padStart(2, '0')}/15`
          : `${values.score}/15`,
      statName: 'CORRECT ANSWERS',
    },
  ];

  return (
    <>
      <main className={styles.skillTest}>
        <p className={styles.skillName}>Skill Test</p>
        <div className={styles.skillCard}>
          <section className={styles.skillOverview}>
            <div className={styles.skillHeader}>
              <div className={styles.skillLeft}>
                <img
                  src={htmlLogo}
                  alt='HTML5 logo'
                  className={styles.skillImg}
                />
                <div className={styles.skillDetails}>
                  <div className={styles.skillTitle}>
                    HyperText Markup Language
                  </div>
                  <p className={styles.skillDetails}>
                    Questions: 09 | Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>
              </div>
              <div className={styles.modalWrapper}>
                <button
                  onClick={() => setIsOpen(true)}
                  className={styles.skillActions}
                >
                  Update
                </button>
                <Modal
                  values={values}
                  setValues={setValues}
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                ></Modal>
              </div>
            </div>

            <div className={styles.statisticsCard}>
              <div className={styles.statisticsTitle}>Quick Statistics</div>
              <ul className={styles.statisticsDetails}>
                {stats.map((stat) => (
                  <li key={stat.id} className={styles.statisticsItem}>
                    <div className={styles.statisticIcon}>{stat.icon}</div>
                    <div>
                      <div className={styles.statData}>{stat.stat}</div>
                      <p className={styles.statisticName}>{stat.statName}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.comparisonCard}>
              <div className={styles.comparisonHeader}>
                <div className={styles.comparisonLeft}>
                  <div className={styles.comparisonTitle}>
                    <strong>Comparison Graph</strong>
                  </div>
                  <p className={styles.comparisonDetails}>
                    <strong>You scored {values.percentile}% percentile</strong>{' '}
                    which is {values.percentile < 75 ? 'lower' : 'higher'} than
                    the average percentile 72% of all the engineers who took
                    this assessment
                  </p>
                </div>
                <div className={styles.comparisonRight}>
                  <p className={styles.comparisonEmoji}>📈</p>
                </div>
              </div>
              <div className={styles.lineWrapper}>
                <LineCh />
              </div>
            </div>
          </section>

          <section className={styles.skillsRight}>
            <div className={styles.syllabusAnalysis}>
              <div className={styles.syllabusHeader}>
                <strong>Syllabus wise Analysis</strong>
              </div>
              <div>
                <p>HTML Tools, Forms, History</p>
                <ProgressBar done={80} color='#438AF6' />
              </div>
              <div>
                <p>Tags & References in HTML</p>
                <ProgressBar done={60} color='#FF9142' />
              </div>
              <p>Tables & CSS Basics</p>
              <ProgressBar done={24} color='#FB5E5E' />

              <div>
                <p>Tables & CSS Basics</p>
                <ProgressBar done={96} color='#2EC971' />
              </div>
            </div>

            <div className={styles.questionAnalysis}>
              <div className={styles.questionHeader}>
                <div>Question Analysis</div>
                <p>
                  {values.score < 10
                    ? `${values.score.padStart(2, '0')}/15`
                    : `${values.score}/15`}
                </p>
              </div>
              <p className={styles.questionDetails}>
                <strong>
                  You scored {values.score} questions correct out of 15.
                </strong>{' '}
                {values.score < 15
                  ? 'However it still needs some improvements'
                  : ''}
              </p>
              <DoughnutChart score={values.score} />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SkillTest;
