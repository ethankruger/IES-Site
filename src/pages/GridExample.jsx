import { useState, useEffect } from 'react';
import ServicesGrid from './ServicesGrid';
import ThemeToggle from '../components/ThemeToggle';
import ScrollProgress from '../components/ScrollProgress';
import '../index.css';

function GridExample() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app ${isLoaded ? 'animate-fade-in' : ''}`}>
      <ScrollProgress />
      <ThemeToggle />
      <main>
        <div style={{ padding: '80px 0 40px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
            3x2 Grid Layout Example
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
            This shows the same service cards in a 3-column grid instead of horizontal scroll
          </p>
        </div>
        <ServicesGrid />
      </main>
    </div>
  );
}

export default GridExample;
