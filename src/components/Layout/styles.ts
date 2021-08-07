import clsx from 'clsx';

const base = clsx(
  'antialiased text-gray-900',
  'dark:text-white dark:bg-gray-800'
);

const bounded = clsx(
  'px-4 py-8 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl'
);

const header = clsx(
  'flex items-center justify-between font-bold text-5xl mb-12'
);

const main = clsx(
  'my-1'
);

const footer = clsx(
  'mt-8'
);

export default {
  bounded,
  base,
  header,
  main,
  footer,
};