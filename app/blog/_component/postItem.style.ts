import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    container: ['rounded-lg', 'shadow-md', 'overflow-hidden', 'w-full'],
    thumbnail: ['w-full'],
    title: ['text-lg', 'font-bold'],
    summary: ['truncate'],
    footer: ['flex', 'mt-4', 'text-sm', 'justify-between'],
    bookmark: ['dark:invert'],
  },
});
