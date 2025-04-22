import React, { useState } from 'react';

const UrlForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    onSubmit(url);
    setUrl('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap sm:flex-nowrap items-start gap-3 my-4"
      aria-label="Shorten a URL"
    >
      <label htmlFor="urlInput" className="sr-only">
        Full URL
      </label>
      <input
        id="urlInput"
        type="url"
        placeholder="Enter full URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="flex-grow w-full sm:w-auto p-2 border border-gray-300 rounded shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Shorten
      </button>
    </form>
  );
};

export default UrlForm;
