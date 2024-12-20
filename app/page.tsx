import homeStyle from '@/app/home.style';
import ModelCanvas from '@/app/_component/scene/Scene';
import HomeBlog from '@/app/_component/blog/HomeBlog';

export default async function Home() {
  const { container } = homeStyle();

  return (
    <main className={container()}>
      <div className={'relative'}>
        <ModelCanvas />
      </div>
      <div className={'lg:mt-28 grid-cols-2 max-sm:grid-cols-1 p-2 gap-4 mb-40 max-sm:mb-0'}>
        <div>
          <div className={'text-2xl font-bold'}>{'</> Recent Post'}</div>
          <HomeBlog />
        </div>
        <div>
          <div className={'text-2xl font-bold'}>{'</> Popular Post'}</div>
          <HomeBlog type={'popular'}/>
        </div>
      </div>
    </main>
  );
}
