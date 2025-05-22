import { clsx } from 'clsx';
import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

// Sample data for random selection (you can replace this with actual data)
const people = ['developers', 'designers', 'engineers', 'problem-solvers'];
const painPoints = ['deadlines', 'bugs', 'complexity', 'time constraints'];

export default function Hero() {
  const [person, setPerson] = useState('');
  const [pain, setPain] = useState('');

  useEffect(() => {
    // Randomly select a person and pain point on mount
    const randomPerson = people[Math.floor(Math.random() * people.length)];
    const randomPain = painPoints[Math.floor(Math.random() * painPoints.length)];

    setPerson(randomPerson);
    setPain(randomPain);
  }, []);

  return (
    <div className={styles.hero}>
      <svg
        className={clsx(styles.hero__pattern, styles.hero__pattern_left)}
        width="100%"
        height="100%"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f5f5f5"
          d="M0,192L60,176C120,160,240,128,360,122.7C480,117,600,139,720,154.7C840,171,960,181,1080,170.7C1200,160,1320,128,1380,117.3L1440,107L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <svg
        className={clsx(styles.hero__pattern, styles.hero__pattern_right)}
        width="100%"
        height="100%"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f5f5f5"
          d="M0,192L60,176C120,160,240,128,360,122.7C480,117,600,139,720,154.7C840,171,960,181,1080,170.7C1200,160,1320,128,1380,117.3L1440,107L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      {person && pain && (
        <div className={styles.hero__headline}>
          <h3
            className={clsx(styles.hero__title, 'animate slide')}
            style={{ fontSize: '1.5rem' }} // Smaller font size applied here
          >
            You've got{' '}
            <span className="highlight highlight--primary">{pain}</span>
            <br />
            We've got{' '}
            <span className="highlight highlight--accent">{person}</span>
          </h3>

          <div
            className={clsx(styles.hero__copy, 'typography animate fade delay-1')}
          >
            <p>Apsis Labs offers exceptional developers ready to build.</p>
          </div>

          <div className={clsx(styles.hero__actions, 'animate fade delay-1')}>
            <button href="/hire" className="btn btn--primary">
              Let's get to work
            </button>
            <button href="/team" className="btn btn--tertiary">
              Meet our team
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
