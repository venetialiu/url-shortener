import React from 'react';

const UrlList = ({ urls }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-300 bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 font-semibold whitespace-nowrap">Full URL</th>
            <th className="p-3 font-semibold whitespace-nowrap">Short URL</th>
            <th className="p-3 font-semibold whitespace-nowrap">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, index) => (
            <tr key={url._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 max-w-sm truncate">
                <a href={url.full} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  {url.full}
                </a>
              </td>
              <td className="p-3">
                <a href={`http://localhost:5001/${url.short}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  {url.short}
                </a>
              </td>
              <td className="p-3">{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;
