import { NavLink, useParams } from "react-router-dom";

export default function CategoryPosts() {
  const { category } = useParams();
  const posts = {
    frontend: {
      101: "React Basics",
      102: "State vs Props",
    },
    backend: {
      201: "Node.js Overview",
      202: "Express.js Routing",
      203: "Working with MongoDB",
    },
  };
  return (
    <div>
      <h2>{`Posts under ${category}:`}</h2>
      <ul style={{listStyleType: 'none'}}>
        {Object.entries(posts[category]).map(([key, value]) => (
          <li key={key}>
            <NavLink to={`/post/${key}`}>{`${value} (postId: ${key})`}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
