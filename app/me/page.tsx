import React from 'react';

export const metadata = {
  title: "Lucas\' site"
}

export default function() {
  return (
    <div className="m-0 min-h-screen flex flex-col ml-[25vw] w-[60vw] max-w-xl">
      <main className="flex flex-col justify-center items-start flex-1">
        <h1 className="font-mono text-3xl font-bold mb-8">Lucas Guo</h1>
        <p className="opacity-65 leading-relaxed mb-6">CS major, Strava monkey, and hike larper</p>
        <p className="leading-relaxed mb-6">I'll be starting my CS degree at the University of Waterloo in Fall 2026! I'm interested in AI/ML, Economics, and Philosophy. I'm currently building proficiency with HTML, CSS, JS, and React before venturing into more complex areas.</p>
        <p className="leading-relaxed">In my free time, I like going to the gym, running, hiking, snowboarding, and hanging out with friends. I also like collecting Pokemon cards, as well as watching anime and YouTube.</p>
      </main>
      <footer className="w-full flex justify-between max-w-xl mb-[15vh]">
        <a href="https://www.instagram.com/lucas.guo_/" target="_blank" className="text-xs hover:underline underline-offset-4">Instagram</a>
        <a href="https://www.linkedin.com/in/lucas-guo/" target="_blank" className="text-xs hover:underline underline-offset-4">LinkedIn</a>
        <a href="https://github.com/lucas-guo-2008" target="_blank" className="text-xs hover:underline underline-offset-4">Github</a>
        <a href="https://www.strava.com/athletes/145385726" target="_blank" className="text-xs hover:underline underline-offset-4">Strava</a>
        <a href="mailto:lucas.lu.guo@gmail.com" className="text-xs hover:underline underline-offset-4">lucas.lu.guo [ at ] gmail.com</a>
      </footer>
    </div>
  );
}
