

export default function ProjectCard(props) {
    return (
        <ul className="project-card">
            {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
            {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
            {props.projectCard.map(item => (
                <li key={item.id}>
                    <a href={item.link}>{item.name}</a>
                </li>
            ))}
        </ul>
    );
}
