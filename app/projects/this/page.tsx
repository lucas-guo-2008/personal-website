'use client'

import React, { useState } from 'react';
import { JOURNAL_ENTRIES, JournalEntryData } from '@/lib/journalEntries'

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
    <div className="border rounded-lg mx-5 mb-5 border-[rgb(203,213,225)] overflow-hidden">
      <div className="cursor-pointer flex items-center bg-[rgba(201,234,255,0.7)] hover:bg-[rgb(201,234,255)] transition-colors duration-200 ease-linear" onClick={() => setIsOpen(!isOpen)}>
        <p className="grow text-lg font-bold mx-5 my-4">{title}</p>
        <p className="bg-transparent height-7 mr-4 cursor-pointer">{isOpen ? "▲ Hide" : "▼ Read"}</p>
      </div>
      {isOpen && (
        <div className="py-2.5 px-5 bg-[rgba(201,234,255,0.3)]">
          <p>{date}</p>
          <p className="whitespace-pre-line ml-11 my-2.5">{entry}</p>
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
  /*const [journalEntries, setJournalEntries] = useState<JournalEntryData[]>([
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
  ]);*/
  const [journalEntries, setJournalEntries] = useState<JournalEntryData[]>(JOURNAL_ENTRIES);

  return (
    <div className="bg-[rgb(240,246,250)] flex-1 px-[10vw] py-[10vh]">
      <h1 className="font-bold text-5xl mb-10">
        Website Project
      </h1>

      <div className="mb-[10vh] border rounded-lg px-5 pb-4">
        <h3 className="font-bold text-xl mb-7 mt-5">Project Logs</h3>
        <JournalEntries journalEntries={journalEntries} />
      </div>
    </div>
  );
}
