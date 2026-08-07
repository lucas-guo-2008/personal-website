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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="block">
          <label>Title</label>
          <input name='title' value={formData.title} onChange={handleChange}></input>
        </div>
        <div className="block">
          <label>Date</label>
          <input name='date' value={formData.date} onChange={handleChange}></input>
        </div>
        <div className="block">
          <input></input>
        </div>
        <button type="submit" className="cursor-pointer">Submit</button>
      </form>

      <div>
        {entries.map((entry) => (
          <div key={entry.title}>
            <div>{entry.title}</div>
            <div>{entry.date}</div>
            <div>{entry.content}</div>
            <button onClick={() => handleDelete(entry.title)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
