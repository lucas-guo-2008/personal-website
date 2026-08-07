'use client';

import { useState, ChangeEvent, SubmitEvent } from 'react';

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

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted Data:', {formData});
    setFormData({title: '', date: '', content: ''});
  }

  return (
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
  );
}
