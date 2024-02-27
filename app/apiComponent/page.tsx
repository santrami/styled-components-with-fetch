"use client"
import { useEffect, useState  } from "react";
import styled from 'styled-components';

interface Todo {
  id: string;
  title: string;
  userId: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const Item = styled.div`
  background-color: #f4f4f4;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const llamarApi = async (endpoint: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
  const data = await response.json();
  return data;
};

const Prueba = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const todos = await llamarApi("todos");
      setTodos(todos);
    
      const users = await llamarApi("users");
      setUsers(users);
  
      const posts = await llamarApi("posts");
      setPosts(posts);
    };
  
    fetchApi();
  }, []);
  

  return (
    <Container>
      <Section>
        <Title>Todos</Title>
        {todos.map((todo) => (
          <Item key={todo.id}>
            <h2>{todo.title}</h2>
            <p>User ID: {todo.userId}</p>
          </Item>
        ))}
      </Section>

      <Section>
        <Title>Users</Title>
        {users.map((user) => (
          <Item key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </Item>
        ))}
      </Section>

      <Section>
        <Title>Posts</Title>
        {posts.map((post) => (
          <Item key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>User ID: {post.userId}</p>
          </Item>
        ))}
      </Section>
    </Container>
  );
};

export default Prueba;
