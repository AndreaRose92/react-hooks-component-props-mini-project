
const defaultImage = "https://via.placeholder.com/215"

export default function About(props) {
    return (
        <aside>
            <img src={props.image ? props.image : defaultImage} alt="blog logo"/>
            <p>{props.about}</p>
        </aside>
    )
}