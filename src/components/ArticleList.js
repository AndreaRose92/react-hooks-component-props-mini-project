import Article from "./Article";

export default function ArticleList(props) {
    const posts = props.posts
    const renderArticles = posts.map((post) => {return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>})
    
    return (
        <main>
            {renderArticles}
        </main>
    )
}