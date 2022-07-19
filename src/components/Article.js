
const defaultDate = "January 1, 1970"


export default function Article(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <small>{props.date ? props.date : defaultDate}</small>
            <p>{props.preview}</p>
        </article>
    )
}