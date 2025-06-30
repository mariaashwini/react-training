import { useParams } from "react-router-dom";

const postData = {
  101: {
    title: "React Basics",
    content: "React is a JavaScript library for building user interfaces.",
  },
  102: {
    title: "State vs Props",
    content: "Props are read-only, State is mutable and managed internally.",
  },
  201: {
    title: "Node.js Overview",
    content:
      "Node.js allows JavaScript to run on the server. It's event-driven and ideal for scalable apps.",
  },
  202: {
    title: "Express.js Routing",
    content:
      "Express.js is a minimalist web framework for Node.js. It makes routing and middleware easier.",
  },
  203: {
    title: "Working with MongoDB",
    content:
      "MongoDB is a NoSQL database. Use Mongoose for schema and model-based development.",
  },
};

export default function PostDetails() {
  const { postId } = useParams();
  const post = postData[postId];

  if (!post) {
    return <h2> Post not found for ID: {postId}</h2>;
  }

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        background: "#f9f9f9",
      }}
    >
      <h2>{post.title}</h2>
      <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>{post.content}</p>
    </div>
  );
}
