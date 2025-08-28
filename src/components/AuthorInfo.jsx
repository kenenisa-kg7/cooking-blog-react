import React from 'react';

const AuthorInfo = ({ author, publishedDate }) => {
  return (
    <section className="author-info bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
      <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-2 md:space-y-0">
        <p className="text-gray-700">
          <strong className="text-gray-900">Author:</strong> {author}
        </p>
        <p className="text-gray-700">
          <strong className="text-gray-900">Published on:</strong> {publishedDate}
        </p>
      </div>
    </section>
  );
};

export default AuthorInfo;

