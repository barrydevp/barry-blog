import clsx from 'clsx';

const base = clsx(
  'antialiased text-gray-900',
  'dark:text-white dark:bg-gray-800'
);

const bounded = clsx(
  'max-w-3xl mx-auto px-6 xl:max-w-5xl xl:px-0',
);

const header = clsx(
  'flex items-center justify-between font-bold text-5xl py-10'
);

const main = clsx(
  'py-2',
  'divide-y divide-gray-600'
);

const footer = clsx(
  'py-6'
);

export default {
  bounded,
  base,
  header,
  main,
  footer,
};