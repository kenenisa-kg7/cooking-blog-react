import React from 'react';

const MorePosts = ({ posts }) => {
  return (
    <section className="more-posts bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">More Recipes</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center py-4">
          More delicious recipes coming soon!
        </p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post, index) => (
            <li key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
              <a 
                href={post.url || '#'} 
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                {post.title}
              </a>
              {post.description && (
                <p className="text-gray-600 text-sm mt-1">{post.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MorePosts;

