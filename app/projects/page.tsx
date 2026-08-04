'use client'

import React, { useState } from 'react';
import './main-styles.css';
import Link from 'next/link';

export default function ProjectPage() {
return (
    <main>
      <title>Lucas' site</title>
      <header className="page-header">
          Projects
        </header>

      <div className="project-summary-container">
        <h2 className="w-fit">
          <Link href="/projects/this" className="hover:underline underline-offset-4">Project Summary: Personal Life Dashboard</Link>
        </h2>
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
    </main>
  );
}