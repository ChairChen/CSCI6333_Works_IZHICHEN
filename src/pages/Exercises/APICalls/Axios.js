import { useState } from "react";
import axios from "axios";

export default function Axios() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');

    const fetchPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setPosts(response.data.slice(0, 5)))
            .catch((error) => console.error(error));
    };

    const createPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', { title })
            .then((response) => {
            console.log('Post created:', response.data);
            setTitle('');
            })
            .catch((error) => console.error(error));
    };

    return (
        <section>
            <h1>Axios+REST API Example</h1>
            <button onClick={fetchPosts}>Fetch Posts</button>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            Integrating with RESTFul APIs:
            Example(Contd..):
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New post title"
            />
            <button onClick={createPost}>Create Post</button>
        </section>
    )
}
