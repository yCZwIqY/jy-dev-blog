import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    container: [
      'rounded-lg',
      'shadow-md',
      'overflow-hidden',
      'w-full',
      'h-full',
      'dark:shadow-gray-600',
      'hover:scale-105',
      'hover:-translate-y-4',
      'transition-all',
      'flex',
      'flex-col'
    ],
    thumbnail: [
      'w-full',
      'h-[350px]',
      'flex',
      'items-center',
      'justify-center',
      'select-none',
      'object-cover',
      ,
      'cursor-default',
      'text-center',
    ],
    title: ['text-lg', 'font-bold'],
    summary: ['truncate', 'my-2', 'pr-2'],
    footer: ['flex', 'mt-4', 'text-sm', 'justify-between', 'mt-auto'],
    bookmark: ['dark:invert'],
    date: ['text-xs'],
  },
});
