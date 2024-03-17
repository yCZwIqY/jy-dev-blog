import homeStyle from '@/app/home.style';
import Image from 'next/image';
import PinkDesk from '@/public/pinkDesk.jpg';
import Expertise from '@/app/_component/expertise/Expertise';
import Projects from '@/app/_component/project/Projects';
import EnterMotion from '@/app/_component/EnterMotion';

export default async function Home() {
  const { container, intro, introLeft, introRight, homeImage, source } =
    homeStyle();

  return (
    <main className={container()}>
      <EnterMotion>
        <strong className={'text-xl'}>{'</>'} Dev location</strong>
        <div className={intro()}>
          <p className={introLeft()}>
            I AM A PASSIONATE DEVELOPER WITH A LOVE FOR CODING AND INNOVATION.
          </p>
          <p className={introRight()}>
            Welcome to my developer blog and portfolio. I enjoy sharing my
            projects and insights with the community. Feel free to explore and
            connect with me
          </p>
        </div>
        <Image
          className={homeImage()}
          src={PinkDesk.src}
          width={1360}
          height={510}
          alt={
            'desktop image from https://pixabay.com/ko/users/lum3n-1066559/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2303851'
          }
        />
      </EnterMotion>
      <Expertise />
      <hr />
      <Projects />
    </main>
  );
}
