import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import PostService from '../services/PostService';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    PostService.getAllPosts().then(response => {
      setPosts(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    PostService.deletePost(id).then(() => {
      setPosts(posts.filter(post => post.id !== id));
    });
  };

  return (
    <div>
      <h2>Post List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th> {/* Nueva columna */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td> {/* Mostrar el cuerpo de la publicación */}
              <td>
                <Link to={`/posts/${post.id}`} className="btn btn-info mr-2">View</Link>
                <Link to={`/edit/${post.id}`} className="btn btn-warning mr-2">Edit</Link>
                <Button onClick={() => handleDelete(post.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PostList;
