import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && comment.trim()) {
      onSubmit({ 
        name: name.trim(), 
        email: email.trim(), 
        comment: comment.trim() 
      });
      setName('');
      setEmail('');
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Your comment"
          required
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        Post Comment
      </Button>
    </form>
  );
};

export default CommentForm;

