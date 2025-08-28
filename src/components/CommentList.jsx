import React from 'react';

const CommentList = ({ comments }) => {
  if (comments.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No comments yet. Be the first to share your thoughts!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-800">{comment.name}</h4>
            <span className="text-sm text-gray-500">
              {comment.timestamp || 'Just now'}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">{comment.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;

