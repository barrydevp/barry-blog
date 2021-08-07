import clsx from 'clsx';

const bounded = clsx(
  'relative inline-block flex align-middle select-none overflow-hidden cursor-pointer',
  'w-12 mr-2 h-6 rounded-full bg-indigo-500'
);

const box = clsx(
  'block absolute outline-none appearance-none cursor-pointer',
  'w-6 h-6 rounded-full bg-white',
  'border-2 shadow-2xl border-indigo-400 focus:border-purple-500 focus:outline-none right-6 checked:right-0 duration-300 ease-out'
);

const icon = clsx(
  'w-1/2 p-1'
)

export default {
  bounded,
  box,
  icon,
};