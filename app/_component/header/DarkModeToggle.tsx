'use client';
import { useEffect, useState } from 'react';
import darkModeToggleStyle from '@/app/_component/header/darkModeToggle.style';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const { container, base, ball, input } = darkModeToggleStyle({
    mode: darkMode ? 'dark' : 'light',
  });

  useEffect(() => {
    const root = document.querySelector('html');
    if (!root) {
      return;
    }

    if (
      root &&
      !root.className.includes('dark') &&
      localStorage.getItem('darkMode') === 'true'
    ) {
      toggleColorMode(false);
    }
  }, []);

  const toggleColorMode = (isDarkMode: boolean) => {
    const root = document.querySelector('html');
    if (!root) {
      return;
    }

    if (isDarkMode) {
      root.classList.remove('dark');
      localStorage.removeItem('darkMode');
    } else {
      root.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={container()}>
      <label htmlFor={'toggle'} className={base()}>
        <div className={ball()}></div>
      </label>
      <input
        id={'toggle'}
        type={'checkbox'}
        className={input()}
        onClick={() => toggleColorMode(darkMode)}
      ></input>
    </div>
  );
}
