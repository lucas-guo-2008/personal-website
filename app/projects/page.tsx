'use client'

import React, { useState } from 'react';
import './main-styles.css';

export interface JournalEntryData {
  title: string;
  date: string;
  entry: string;
}

interface JournalEntryProps {
  title: string;
  date: string;
  entry: string;
}

interface JournalEntriesProps {
  journalEntries: JournalEntryData[];
}

function JournalEntry({ title, date, entry }: JournalEntryProps) {
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  return (
    <div className="journal-entry-container">
      <div className="journal-entry-header" onClick={() => setIsOpen(!isOpen)}>
        <p className="journal-entry-title">{title}</p>
        <button className="toggle-journal-entry-button">{isOpen ? "▲ Hide" : "▼ Read"}</button>
      </div>
      {isOpen && (
        <div className="journal-entry-content">
          <p>{date}</p>
          <p className="journal-entry-text">{entry}</p>
        </div>
      )}
    </div>
  );
}

function JournalEntries( {journalEntries}: JournalEntriesProps ) {
  return (
    <div>
      {journalEntries.map((journalEntry, index) => {
        return (
          <JournalEntry title={journalEntry.title} date={journalEntry.date} entry={journalEntry.entry} key={index}/>
        );
      })}
    </div>
  );
}

export default function ProjectSummaryPage() {
  const [journalEntries, setJournalEntries] = useState<JournalEntryData[]>([
    {
      title: 'First Log - The Beginning',
      date: '2026/07/24',
      entry: 'This is the start of me building my website in an effort to prepare for uni! I\'ve went through a 6h HTML and CSS tutorial so now I understand some of how  to convert my website designs into an actual page, even if I still need to rely heavily on searching things up to remind myself of the syntax and differences between all the different displays and positions and of course syntax needed. \n\nI think my main goal for now is to rapidly learn the basics of everything needed to code a website, then slowly build one myself.\n\nNext up: Javascript.'
    }, 
    {
      title: 'Log 2 - After a Week',
      date: '2026/08/01',
      entry: 'I\'ve now finished a long Javascript course as well as some React content to be able to be on my way to making my website. I\'ve finished making my project page for this project (which is where these logs go), as well as a personal bio page. I\'ve also created a project summary which I\'ll add to the top of this page. \n\nThe next steps are to finish designing these pages before learning Next.js to connect my pages together and enable page routing. Also, maybe I should hurry up learning stuff because uni is starting in like 5 weeks 😨.'
    }, 
    {
      title: 'Log 3 - It\'s time to accelerate (?)',
      date: '2026/08/03',
      entry: 'The personal bio and projects webpages are about completed (Phase 1). Now, it\'s time to learn how to route pages with Next.js and make the necessary changes to my project. After that, I\'ll learn about retrieving, reading, and displaying data to work on Phase 2.\n\nOne thing I\'ve thought about is starting to learn faster. There\'s not a lot of time left before uni so I should really just focus on breadth over depth. I also want to learn more about AI and the tools I can use. I hope I can use them effectively to boost my learning productivity. However, I also want to spend lots of time with family and friends this summer before the great separation, so let\'s see what I can do with a few hours a day.\n\nI guess hopefully the timeline right now is complete Next.js + Phase 2 in 3 days. I\'ll be back on the 6th.'
    },
    {
      title: 'Log 4 - An Impending Sense of Doom',
      date: '2026/08/03 (night)',
      entry: 'Big refactor today with shifting the whole repo onto Next.js framework. Still not finished with everything, but a more clear roadmap is ahead. To be honest, there\'s a lot of changes that need to be made to my code still. This might also become more like a journal with more frequent entries and goals for the near-future.\n\nHere\'s some goals for tomorrow and maybe the day after:\n1. Convert projects page css to tailwind css\n2. Change projects page to have project summaries with project logs in subpages (and format both pages)\n3. Create containers for project summaries\n4. Create a navbar connecting pages that sits at the top of all pages on the website\n5. Start learning how to import data from excel or google sheets (for gym data) as well as displaying it and choosing what to display\n6. See if I can turn these journal entries into JSON or if there are any better methods of storing it (hopefully a r/w solution so I can create a journal entry submitter too)\n7. See if I can connect github to project logs page to display commits (and look at how I may present this data)'
    }
  ]);

  return (
    <main>
      <title>Lucas' site</title>
      <header className="page-header">
        Projects
      </header>

      <div className="project-summary-container">
        <h2>Project Summary: Personal Life Dashboard</h2>
        <h3>Goal</h3>
        <p>
          Build a personal website to display project work and track daily metrics (Gym, Running, Sleep). The secondary goal is to
          learn web development by shipping a functional, end-to-end system with minimal prior experience.
        </p>

        <h3>Approach & Roadmap</h3>
        <ul>
          <li> Phase 1 (Static Site): Begin strictly with a static Projects page to establish the base site before introducing metric dashboards.</li>
          <li> Phase 2 (Gym Data): Add gym logging next using manual entry (e.g., Google Sheets or JSON) since it has no external API dependencies.</li>
          <li>Phase 3 (Garmin Data): Add Running and Sleep dashboards later. Start with manual Garmin data exports, then explore automated options using unofficial APIs in future updates.</li>
          <li>Defer Complex Features: Postpone database setup, user authentication, and live interactive forms until the initial read-only site is deployed and running smoothly.</li>
        </ul>

        <h3>Tech Stack & Implementation</h3>
        <ul>
          <li>Framework: Next.js</li>
          <li>Hosting: Vercel</li>
          <li>Data Sources: Static JSON files or Google Sheets imports initially; CSV/JSON manual exports for Garmin data.</li>
        </ul>
      </div>

      <div className="journal-container">
        <h3 className="journal-container-title">Project Logs</h3>
        <JournalEntries journalEntries={journalEntries} />
      </div>
    </main>
  );
}
