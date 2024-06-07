import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import PostService from '../services/PostService';

function PostEdit() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    PostService.getPostById(id).then(response => {
      setTitle(response.data.title);
      setBody(response.data.body);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    PostService.updatePost(id, { title, body }).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default PostEdit;
