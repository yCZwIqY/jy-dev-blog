import { tv } from 'tailwind-variants';

export default tv({
  slots: {
    title: ['text-4xl', 'mt-12', 'font-black', 'text-center', 'px-2'],
    summary: [
      'text-lg',
      'mt-4',
      'mb-2',
      'text-center',
      'text-gray-500',
      'px-2',
    ],
    tagContainer: [
      'm-4',
      'flex',
      'justify-center',
      'flex-wrap',
      'gap-2',
      'px-2',
    ],
    content: [
      'p-4',
      'my-32',
      '[&_*]:text-base',
      '[&_ul]:my-6',
      '[&_ol]:my-6',
      '[&_li]:my-1',
      '[&_li]:ml-10',
      '[&_li]:max-sm:ml-4',
      '[&_li]:pl-2',
      '[&_p]:my-6',
      '[&_table]:my-8',
      '[&_table]:shadow-md',
      '[&_table]:rounded-md',
      '[&_table]:p-4',
      '[&_pre]:p-2',
      '[&_ol]:flex',
      '[&_ol]:flex-col',
      '[&_ol]:list-disc',
      '[&_ul_li]:marker:content-["❇"]',
      '[&_ul_li]:marker:font-bold',
      '[&_ul_li]:marker:mx-2',
      '[&_ul]:list-decimal',
      '[&_ul_li]:marker:font-bold',
      '[&_tbody>tr:not(:last-child)]:border-b',
      '[&_.tox-checklist>li]:pl-0',
      '[&_.tox-checklist>li]:flex',
      '[&_.tox-checklist>li]:gap-2',
      '[&_.tox-checklist>li]:before:content-[""]',
      '[&_.tox-checklist>li]:before:w-5',
      '[&_.tox-checklist>li]:before:h-5',
      '[&_.tox-checklist>li]:before:border-2',
      '[&_.tox-checklist>li]:before:border-black',
      '[&_.tox-checklist>li]:before:dark:border-white',
      '[&_.tox-checklist>li]:before:rounded-md',
      '[&_.tox-checklist>li]:before:block',
      '[&_.tox-checklist>li.tox-checklist--checked]:before:bg-primary',
      '[&_.tox-checklist>li.tox-checklist--checked]:before:bg-primary',
      '[&_.tox-checklist>li.tox-checklist--checked]:before:display',
      '[&_.tox-checklist>li.tox-checklist--checked]:before:flex',
      '[&_.tox-checklist>li.tox-checklist--checked]:before:justify-center',
      '[&_.tox-checklist>li.tox-checklist--checked]:before:content-["✔"]',
      '[&_.tox-checklist>li.tox-checklist--checked]:before:text-[15px]',
      '[&_.tox-checklist>li.tox-checklist--checked]:before:text-[15px]',
      '[&_h1]:text-4xl',
      '[&_h1]:max-sm:text-3xl',
      '[&_h1]:font-black',
      '[&_h1]:my-3',
      '[&_h2]:text-2xl',
      '[&_h2]:max-sm:text-xl',
      '[&_h2]:font-black',
      '[&_h2]:my-3',
      '[&_h3]:text-xl',
      '[&_h3]:max-sm:text-lg',
      '[&_h3]:font-black',
      '[&_h3]:my-3',
      '[&_h4]:text-lg',
      '[&_h4]:max-sm:text-base',
      '[&_h4]:my-3',
      '[&_h5]:text-lg',
      '[&_h5]:max-sm:text-base',
      '[&_h5]:my-3',
      '[&_h6]:text-lg',
      '[&_h6]:max-sm:text-base',
      '[&_h6]:my-3',
      '[&_pre]:font-[intelone-mono-font-family-regular]',
      '[&_pre]:text-wrap',
      '[&_pre]:p-8',
      '[&_pre]:max-sm:p-4',
      '[&_pre]:rounded-lg',
      '[&_pre]:shadow-md',
      '[&_pre]:dark:shadow-gray-500',
    ],
  },
});
