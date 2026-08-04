import React from 'react';
import './personal-bio-styles.css'; // Direct CSS import

export const metadata = {
  title: "Lucas\' site"
}

export default function() {
  return (
    <>
      <title>Personal Bio</title>
      <main className="bio-container">
      <h1>Lucas Guo</h1>
      <p className="subtitle-text">CS major, Strava monkey, and hike larper</p>
      <p>I'll be starting my CS degree at the University of Waterloo in Fall 2026! I'm interested in AI/ML, Economics, and Philosophy. I'm currently building proficiency with HTML, CSS, JS, and React before venturing into more complex areas.</p>
      <p>In my free time, I like going to the gym, running, hiking, snowboarding, and hanging out with friends. I also like collecting Pokemon cards, as well as watching anime and YouTube.</p>
      </main>
      <footer className="links-container">
        <a href="https://www.instagram.com/lucas.guo_/" target="_blank" className="profile-link">Instagram</a>
        <a href="https://www.linkedin.com/in/lucas-guo/" target="_blank" className="profile-link">LinkedIn</a>
        <a href="https://github.com/lucas-guo-2008" target="_blank" className="profile-link">Github</a>
        <a href="https://www.strava.com/athletes/145385726" target="_blank" className="profile-link">Strava</a>
        <a href="mailto:lucas.lu.guo@gmail.com" className="profile-link">lucas.lu.guo [ at ] gmail.com</a>
      </footer>
    </>
  );
}
