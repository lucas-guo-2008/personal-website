'use client'

import React from 'react';
import Link from 'next/link';
import { projectSummaries } from '@/lib/projectSummaries';

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
  return (
    <div className="bg-[rgb(240,246,250)] flex-1">
      <div className="py-[10vh] px-[10vw]">
        <h1 className="font-bold text-5xl mb-10">Projects</h1>
        <ProjectSummaries projectSummaries={projectSummaries}/> 
      </div>
    </div>
  );
}