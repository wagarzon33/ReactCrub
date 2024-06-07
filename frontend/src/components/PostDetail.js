import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import PostService from '../services/PostService';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    PostService.getPostById(id).then(response => {
      setPost(response.data);
    });
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <Card>
      <Card.Header as="h5">Post Detail</Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostDetail;
