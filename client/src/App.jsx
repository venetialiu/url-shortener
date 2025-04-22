import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlForm from './UrlForm';
import UrlList from './UrlList';

const App = () => {
  const [urls, setUrls] = useState([]);

  const fetchUrls = async () => {
    const res = await axios.get('https://url-shortener-h2mw.onrender.com');
    setUrls(res.data);
  };

  const addUrl = async (fullUrl) => {
    await axios.post('https://url-shortener-h2mw.onrender.com', { fullUrl });
    fetchUrls();
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="max-w-3xl mx-auto">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700">URL Shortener</h1>
        <p className="text-gray-600 mt-2">Paste a long URL to get a short one</p>
      </header>
      <UrlForm onSubmit={addUrl} />
      <UrlList urls={urls} />
    </div>
  </div>
  );
};

export default App;