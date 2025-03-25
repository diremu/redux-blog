
const SinglePostDisplay = (post) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <h5>Authored By {post.name}</h5>

            <div>{post.body}</div>
        </div>
    )
}

export default SinglePostDisplay