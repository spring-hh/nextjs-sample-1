import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Link as Scroll, scroller } from 'react-scroll';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

type Header = {
  id: number;
  path: string;
  name: string;
};

const HEADER_LIST: Header[] = [
  { id: 1, path: '/markdown', name: 'markdown' },
  { id: 2, path: '/images', name: 'images' },
];

const Layout = ({ children, title = 'HP by NextJS' }: Props) => {
  const router = useRouter();
  let [menuClass, setMenuClass] = useState(false);
  let [navClass, setNavClass] = useState(false);

  // get this year
  const getYear = () => {
    const date = new Date();
    return date.getFullYear().toString();
  };

  const scrollTarget = (target: any) => scroller.scrollTo(target, { smooth: true, duration: 500, offset: -48 });

  const scrollToPage = async (target: any) => {
    if (router.pathname !== '/') {
      await router.push('/');
    }
    scrollTarget(target);
  };

  const toggleMenu = () => {
    menuClass = !menuClass;
    navClass = !navClass;
    setMenuClass(menuClass);
    setNavClass(navClass);
  };

  const titleName = `${title} | spring-hh`;

  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{titleName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="sticky top-0 z-20">
        <nav className="bg-gray-50 w-screen border-b">
          <div className="grid grid-cols-header">
            <div className="flex items-center pl-3 h-header">
              <div className="flex space-x-4">
                <div className="flex items-center smx:hidden">
                    <Link href='/'>
                      <div className="text-gray-800 hover:text-blue-800 px-1 py-2 rounded">spring-hh</div>
                    </Link>
                </div>
                {HEADER_LIST.map((data) => (
                  <div key={data.id} className="flex items-center smx:hidden">
                    <Link href={data.path}>
                      <div className="text-gray-800 hover:text-blue-800 px-1 py-2 rounded">{data.name}</div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end flex-1 pr-3 smx:hidden">
                <div className="text-gray-800 hover:text-blue-800 px-1 py-2 rounded">
                  <Link href='/'>
                    {/* user icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden absolute h-main2 z-10">
            {menuClass && (
              <div className="h-main2 w-screen bg-black bg-opacity-70">
                {menuClass &&
                  HEADER_LIST.map((data) => (
                    <div key={data.id} className="flex flex-col items-center">
                      <Link href={data.path}>
                        <div className="text-gray-300 hover:bg-gray-700 px-3 py-4 rounded">{data.name}</div>
                      </Link>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </nav>
      </header>
      <main className="flex flex-1 w-screen">{children}</main>
      <footer className="text-gray-800 w-full h-footer flex justify-center items-center border-t z-20 bg-gray-50">
        <p>&copy;{getYear()} spring-hh All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;