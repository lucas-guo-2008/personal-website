'use client';

import { useState, useEffect, ChangeEvent, SubmitEvent } from 'react';

interface FormData {
  title: string;
  date: string;
  content: string;
}

export default function JournalFormPage() {
  const [ formData, setFormData ] = useState<FormData>({
    title: '',
    date: '',
    content: '',
  });

  const [ entries, setEntries ] = useState<FormData[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted Data:', {formData});

    const updatedEntries = [...entries, formData];
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));

    setFormData({title: '', date: '', content: ''});
  }

  const handleDelete = (id: string) => {
    const updatedEntries = entries.filter((entry) => entry.title !== id);
    setEntries(updatedEntries);
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
  }

  useEffect(() => {
    const saved = localStorage.getItem('entries');
    console.log(saved);
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  return (
    <div className="bg-[rgb(240,246,250)] flex-1">
      <div className="py-[10vh] px-[10vw]">
        <h1 className="font-bold text-5xl mb-10">Project Log Submission</h1>
        <form onSubmit={handleSubmit} className="border rounded-lg px-5 pb-4">
          <div className="w-fit text-2xl font-bold my-5">
            <label className="block">Title</label>
            <input name='title' value={formData.title} onChange={handleChange} className="border"></input>
          </div>
          <div className="w-fit text-2xl font-bold my-5">
            <label className="block">Date</label>
            <input name='date' value={formData.date} onChange={handleChange}className="border"></input>
          </div>
          <div className="w-fit text-2xl font-bold my-5">
            <label className="block">Content</label>
            <input name='content' value={formData.content} onChange={handleChange} className="border"></input>
          </div>
          <button type="submit" className="cursor-pointer border">Submit</button>
        </form>

        <div>
          {entries.map((entry) => (
            <div key={entry.title}>
              <div>{entry.title}</div>
              <div>{entry.date}</div>
              <div>{entry.content}</div>
              <button onClick={() => handleDelete(entry.title)} className="cursor-pointer">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
