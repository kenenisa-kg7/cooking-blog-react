import { useState } from 'react';
import Header from './components/Header';
import AuthorInfo from './components/AuthorInfo';
import BlogPost from './components/BlogPost';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';
import MorePosts from './components/MorePosts';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);

  // Blog data
  const blogData = {
    title: "Delicious Ethiopian Recipes",
    author: "Kenenisa Gemechu",
    publishedDate: "July 3, 2025",
    postTitle: "How to Make Doro Wat (Spicy Chicken Stew)",
    ingredients: [
      "Chicken (with bones)",
      "Red onions (finely chopped)",
      "Berbere spice",
      "Niter kibbeh (Ethiopian spiced butter)",
      "Garlic, ginger, and salt",
      "Hard-boiled eggs"
    ],
    instructions: [
      "Cook onions without oil until golden.",
      "Add niter kibbeh and garlic-ginger paste.",
      "Add berbere and stir well.",
      "Add chicken and simmer until tender.",
      "Add boiled eggs at the end and serve hot with injera."
    ]
  };

  // Mock data for more posts
  const morePosts = [
    {
      title: "Traditional Injera Recipe",
      description: "Learn how to make authentic Ethiopian flatbread",
      url: "#"
    },
    {
      title: "Kitfo - Ethiopian Steak Tartare",
      description: "A spicy raw beef dish perfect for special occasions",
      url: "#"
    },
    {
      title: "Vegetarian Ethiopian Platter",
      description: "A collection of delicious plant-based Ethiopian dishes",
      url: "#"
    }
  ];

  const handleCommentSubmit = (newComment) => {
    const commentWithTimestamp = {
      ...newComment,
      timestamp: new Date().toLocaleString()
    };
    setComments([...comments, commentWithTimestamp]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Header title={blogData.title} />
        
        <AuthorInfo 
          author={blogData.author}
          publishedDate={blogData.publishedDate}
        />
        
        <BlogPost 
          title={blogData.postTitle}
          ingredients={blogData.ingredients}
          instructions={blogData.instructions}
        />
        
        <section className="comment-section bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Leave a Comment</h2>
          <CommentForm onSubmit={handleCommentSubmit} />
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Comments ({comments.length})
            </h3>
            <CommentList comments={comments} />
          </div>
        </section>

        <MorePosts posts={morePosts} />
      </div>
    </div>
  );
}

export default App;

