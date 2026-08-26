export const projectSummaries = [
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
      ],
      page: '/projects/this'
    },
    {
      title: 'Quotes Website',
      summary: 'A decoupled, full-stack application for managing and displaying quotes. Features a Next.js frontend communicating via REST API with a Python FastAPI backend and SQLite database. The goal is to build a simple backend-focused project to learn about backend development.',
      phases: [],
      stack: [
        'Frontend: Next.js, React, Tailwind CSS (Hosted on Vercel)',
        'Backend: Python, FastAPI, SQLite, Pydantic (Hosted on Railway/Render)',
        'Protocol: RESTful API / JSON'
      ],
      page: '/projects/quotes'
    },
  ];