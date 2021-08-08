import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = ({ location }) => {
  return (
    <Layout hiddenHeader={true} location={location} title="404">
      <div className="my-20 text-center">
        <h1 className="font-black uppercase text-7xl lg:text-9xl text-white mb-20">
          404
        </h1>
        <div className="mb-10 md:mb-12 text-white font-light">
          <h1 className="font-black uppercase text-3xl lg:text-5xl text-blue-400 mb-10">
            You seem to be lost 🥲 !
          </h1>
          <p className="m-4">Sorry 😔 we couldn’t find what you were looking for.</p>
          <p className="m-4">Try searching again or use the Go Home button below.</p>
        </div>
        <div className="mb-20 md:mb-0">
          <Link
            to="/"
            className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110
            text-blue-400 hover:text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline h-6 w-6 mx-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go home.
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
