'use client'

import React from 'react';
import './main-styles.css';
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
    <div className="project-summary-container">
      <h2 className="w-fit">
        <Link href="/projects/this" className="hover:underline underline-offset-4">Project Summary: {title}</Link>
      </h2>

      <h3>Goal</h3>
      <p>{summary}</p>

      <h3>Approach & Roadmap</h3>
      <ul>{phases.map((phase, index) => {
        return (
          <li key={index}>Phase {index+1}{(phase.comment) ? ` (${phase.comment})`: ''}: {phase.description}</li>
        );
      })}
      </ul>

      <h3>Tech Stack & Implementation</h3>
      <ul>{stack.map((str, index) => {
        return (
          <li key={index}>{str}</li>
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
    <main>
      <header className="page-header">Projects</header>
      <ProjectSummaries projectSummaries={projectSummaries}/>
    </main>
  );
}