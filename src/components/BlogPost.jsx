import React from 'react';

const BlogPost = ({ title, ingredients, instructions }) => {
  return (
    <section className="blog-content bg-white p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">{title}</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Ingredients:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="hover:text-gray-900 transition-colors">
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Instructions:</h3>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          {instructions.map((instruction, index) => (
            <li key={index} className="hover:text-gray-900 transition-colors leading-relaxed">
              {instruction}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default BlogPost;

