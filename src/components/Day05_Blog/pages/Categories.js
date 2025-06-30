import { NavLink } from "react-router-dom";

export default function Categories(){
    const categories = ['frontend','backend' ];
    return (
        <div style={{ padding: "1rem" }}>
            <h2>Categories</h2> 
            <ul style={{listStyleType: 'none'}}>
                {categories.map((category) => (
                    <li key={category}>
                        <NavLink to={`/categories/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}