import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import Toggle from '../Toggle';
import ImageIcon from '../ImageIcon';

import styles from './styles';
// @ts-ignore
import sun from '../../../content/assets/sun.png';
// @ts-ignore
import moon from '../../../content/assets/moon.png';

export interface LayoutProps {
  location: Location,
  title: string,
  children?: React.ReactElement | React.ReactElement[],
  hiddenHeader?: boolean,
}

interface ThemeModeProps {
  theme: string,
  changeTheme: () => any,
}

const ThemeModeToggle = ({ theme, changeTheme }: ThemeModeProps) => {
  return (
    <Toggle
      renderIcon={(className: string) => {
        return (
          <>
            <ImageIcon className={className} src={moon}/>
            <ImageIcon className={className} src={sun}/>
          </>
        );
      }}
      checked={theme === 'dark'}
      toggle={changeTheme}
    />
  );
};

interface HeaderTitleProps {
  pathName: string,
  title: string,
}

// @ts-ignore
const rootPath = `${__PATH_PREFIX__}/`;

const HeaderTitle = ({ pathName, title }: HeaderTitleProps) => {
  if (pathName === rootPath) {
    return (
      <h1>
        <Link to={'/'}>
          {title}
        </Link>
      </h1>
    );
  }

  return (
    <h3 className="text-3xl">
      <Link to={'/'}>
        {title}
      </Link>
    </h3>
  );
};

const Layout = ({ title, children, location, hiddenHeader }: LayoutProps) => {
  // @ts-ignore
  const [theme, setTheme] = useState(window.__theme);

  useEffect(() => {
    // @ts-ignore
    window.__onThemeChange = () => {
      // @ts-ignore
      setTheme(window.__theme);
    };
  }, []);

  const renderHeader = !hiddenHeader && (
    <div className={styles.bounded}>
      <header className={styles.header}>
        <HeaderTitle pathName={location.pathname} title={title}/>
        {theme !== null ? (
          <ThemeModeToggle
            theme={theme}
            changeTheme={() => {
              // @ts-ignore
              window.__setPreferredTheme(
                theme === 'dark' ? 'light' : 'dark'
              );
            }
            }
          />
        ) : (
          <div style={{ height: '24px' }}/>
        )}
      </header>
    </div>
  );

  return (
    <div className={styles.base}>
      {renderHeader}
      <div className={styles.bounded}>
        <main className={styles.main}>{children}</main>
      </div>
      <div className={styles.bounded}>
        <footer className={styles.footer}>
          © {new Date().getFullYear()}, barry
          {` `}
          <a className="hover:text-green-600 text-green-300" href="https://github.com/barrydevp/barry-blog">git</a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
