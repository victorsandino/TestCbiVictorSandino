import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';


const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          const firstTenPosts = response.data.slice(0, 10);
          setPosts(firstTenPosts);
        })
        .catch((error) => {
          console.error('Error al obtener los posts:', error);
        });
  }, []);

  return (
      <div className="container">
        {posts.map((post) => (
            <Card key={post.id} product={post} />
        ))}
      </div>
  );
};

export default App;
