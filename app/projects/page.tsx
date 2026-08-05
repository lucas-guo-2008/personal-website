'use client'

import React from 'react';
import Link from 'next/link';

interface Phase {
  comment: string;
  description: string;
}

interface ProjectData {
  title: string;
  summary: string;
  phases: Phase[];
  stack: string[];
}

interface ProjectSummariesProps {
  projectSummaries: ProjectData[];
}

function ProjectSummary({ title, summary, phases, stack }:ProjectData) {
  return (
    <div className="border rounded-lg px-5 pb-4">
      <h2 className="w-fit text-3xl font-bold my-5">
        <Link href="/projects/this" className="hover:underline underline-offset-8">Project Summary: {title}</Link>
      </h2>

      <h3 className="font-bold text-xl mt-5 mb-2.5">Goal</h3>
      <p>{summary}</p>

      <h3 className="font-bold text-xl mt-5 mb-2.5">Approach & Roadmap</h3>
      <ul className="list-disc list-outside pl-10 space-y-2">{phases.map((phase, index) => {
        return (
          <li key={index}>Phase {index+1}{(phase.comment) ? ` (${phase.comment})`: ''}: {phase.description}</li>
        );
      })}
      </ul>

      <h3 className="font-bold text-xl mt-5 mb-2.5">Tech Stack & Implementation</h3>
      <ul className="list-disc list-outside pl-10 space-y-2">{stack.map((str, index) => {
        return (
          <li key={index} className="mb-2">{str}</li>
        );
      })}
      </ul>
    </div>
  );
}

function ProjectSummaries({projectSummaries}:ProjectSummariesProps) {
  return (
    projectSummaries.map((projectSummary, index) => {
      return <ProjectSummary key={index} title={projectSummary.title} summary={projectSummary.summary} phases={projectSummary.phases} stack={projectSummary.stack}/>
    })
  );
}

export default function ProjectPage() {
  const projectSummaries = [
    {
      title: 'Personal Life Dashboard',
      summary: 'Build a personal website to display project work and track daily metrics (Gym, Running, Sleep). The secondary goal is to learn web development by shipping a functional, end-to-end system with minimal prior experience.',
      phases: [
        {
          comment: 'Static Site',
          description: 'Begin strictly with a static Projects page to establish the base site before introducing metric dashboards.'
        }, {
          comment: 'Gym Data',
          description: 'Add gym logging next using manual entry (eg. Google Sheets or JSON) since it has no external API dependencies'
        }, {
          comment: 'Garmin Data',
          description: 'Add Running and Sleep dashboards later. Start with manual Garmin data exports, then explore automated options using unofficial APIs in future updates.'
        }, {
          comment: 'Defer Complex Features',
          description: 'Postpone database setup, user authentication, and live interactive forms until the initial read-only site is deployed and running smoothly.'
        }
      ],
      stack: [
        'Framework: Next.js',
        'Hosting: Vercel',
        'Data Sources: Static JSON files or Google Sheets imports initially; CSV/JSON manual exports for Garmin data.'
      ]
    },
  ];

  return (
    <div className="bg-[rgb(240,246,250)] flex-1">
      <div className="py-[10vh] px-[10vw]">
        <h1 className="font-bold text-5xl mb-10">Projects</h1>
        <ProjectSummaries projectSummaries={projectSummaries}/> 
      </div>
    </div>
  );
}