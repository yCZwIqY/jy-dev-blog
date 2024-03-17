'use client';

import Link from 'next/link';
import headerStyle, {
  mobileNavStyle,
} from '@/app/_component/header/header.style';
import { useSelectedLayoutSegment } from 'next/navigation';
import DarkModeToggle from '@/app/_component/header/DarkModeToggle';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useState } from 'react';

interface Navigation {
  path: string;
  name: string;
}

const HEADER_NAVIGATION: Navigation[] = [
  {
    path: 'blog',
    name: 'Blog',
  },
  {
    path: 'article',
    name: 'Article',
  },
  {
    path: 'project',
    name: 'Project',
  },
  {
    path: 'profile',
    name: 'Profile',
  },
];

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 700px)');
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const segment = useSelectedLayoutSegment();
  const { headerContainer, navContainer, navItem } = headerStyle();
  const { mobileNav, menuIcon, mobileNavItem } = mobileNavStyle({
    state: navOpen ? 'open' : 'close',
  });

  return (
    <header className={headerContainer()}>
      <div style={{ marginLeft: '0.5rem' }}>
        <Link href={'/'}>Dev Story</Link>
      </div>
      {isMobile ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <DarkModeToggle />
            <button className={menuIcon()} onClick={() => setNavOpen(!navOpen)}>
              <svg viewBox="0 0 448 512">
                <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"></path>
              </svg>
            </button>
          </div>
          <nav className={mobileNav()}>
            <ul>
              {HEADER_NAVIGATION.map(({ path, name }) => (
                <li key={name} style={{ marginBottom: '4px' }}>
                  <Link
                    className={mobileNavItem()}
                    data-active={segment === path}
                    href={`/${path}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : (
        <div style={{ display: 'flex' }}>
          <nav>
            <ul className={navContainer()}>
              {HEADER_NAVIGATION.map(({ path, name }) => (
                <li
                  key={name}
                  className={navItem()}
                  data-active={segment === path}
                >
                  <Link href={`/${path}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <DarkModeToggle />
        </div>
      )}
    </header>
  );
}
