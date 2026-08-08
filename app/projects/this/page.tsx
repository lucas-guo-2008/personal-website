'use client'

import React, { useState } from 'react';
import { JOURNAL_ENTRIES, JournalEntryData } from '@/lib/journalEntries'

interface JournalEntryProps {
  title: string;
  date: string;
  entry: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface JournalEntriesProps {
  journalEntries: JournalEntryData[];
  journalOpen: Map<string, boolean>
  onToggle: (id: string) => void;
}

function JournalEntry({ title, date, entry, isOpen, onToggle }: JournalEntryProps) {
  return (
    <div className="border rounded-lg mx-5 mb-5 border-[rgb(203,213,225)] overflow-hidden">
      <div className="cursor-pointer flex items-center bg-[rgba(201,234,255,0.7)] hover:bg-[rgb(201,234,255)] transition-colors duration-200 ease-linear" onClick={() => onToggle()}>
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

function JournalEntries( {journalEntries, journalOpen, onToggle}: JournalEntriesProps ) {
  return (
    <div>
      {journalEntries.map((journalEntry, index) => {
        const isOpen = !!journalOpen.get(journalEntry.title);
        return (
          <JournalEntry title={journalEntry.title} date={journalEntry.date} entry={journalEntry.entry} isOpen={isOpen} onToggle={() => onToggle(journalEntry.title)} key={index}/>
        );
      })}
    </div>
  );
}

export default function ProjectSummaryPage() {
  const [journalEntries, setJournalEntries] = useState<JournalEntryData[]>(JOURNAL_ENTRIES);
  const [isOpen, setIsOpen] = useState<Map<string, boolean>>(new Map(journalEntries.map((entry) => [entry.title, false])));

  const handleToggle = (id:string) => {
    setIsOpen((previous) => {
      const newIsOpen = new Map(previous);
      newIsOpen.set(id, !newIsOpen.get(id));
      return newIsOpen;
    });
  }

  return (
    <div className="bg-[rgb(240,246,250)] flex-1 px-[10vw] py-[10vh]">
      <h1 className="font-bold text-5xl mb-10">
        Website Project
      </h1>

      <div className="mb-[10vh] border rounded-lg px-5 pb-4">
        <h3 className="font-bold text-xl mb-7 mt-5">Project Logs</h3>
        <button onClick={() => setIsOpen(new Map(journalEntries.map((entry) => {return [entry.title, true];})))}>Open All</button>
        <JournalEntries journalEntries={journalEntries} journalOpen={isOpen} onToggle={handleToggle}/>
      </div>
    </div>
  );
}
