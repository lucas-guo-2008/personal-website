import React from 'react';
import SocialLink from '@/components/SocialLink';

export const metadata = {
  title: "About me"
}

export default function AboutPage() {
  return (
    <div className="bg-[rgb(240,246,250)] flex-1 flex flex-col items-center px-6">
      <div className="flex-1 flex flex-col w-full max-w-xl">
        <div className="my-auto py-12">
          <h1 className="font-mono text-3xl font-bold mb-8">Lucas Guo</h1>
          <p className="opacity-65 leading-relaxed mb-6">CS major, Strava monkey, and hike larper</p>
          <p className="leading-relaxed mb-6">I'll be starting my CS degree at the University of Waterloo in Fall 2026! I'm interested in AI/ML, Economics, and Philosophy. I'm currently building proficiency with HTML, CSS, JS, and React before venturing into more complex areas.</p>
          <p className="leading-relaxed">In my free time, I like going to the gym, running, hiking, snowboarding, and hanging out with friends. I also like collecting Pokemon cards, as well as watching anime and YouTube.</p>
        </div>
        <footer className="w-full flex justify-between max-w-xl mb-[15vh]">
          <SocialLink href="https://www.instagram.com/lucas.guo_/">Instagram</SocialLink>
          <SocialLink href="https://www.linkedin.com/in/lucas-guo/">LinkedIn</SocialLink>
          <SocialLink href="https://github.com/lucas-guo-2008">Github</SocialLink>
          <SocialLink href="https://www.strava.com/athletes/145385726">Strava</SocialLink>
          <SocialLink href="mailto:lucas.lu.guo@gmail.com">lucas.lu.guo [ at ] gmail.com</SocialLink>
        </footer>
      </div>
    </div>
  );
}
