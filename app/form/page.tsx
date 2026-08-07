'use client';

import { useState, ChangeEvent } from 'react';

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form>
      <div>
        <label>Title</label>
        <input name='title' value={formData.title} onChange={handleChange}></input>
      </div>
      <div>
        <label>Date</label>
        <input name='date' value={formData.date} onChange={handleChange}></input>
      </div>
      <div>
        <input></input>
      </div>
    </form>
  );
}
