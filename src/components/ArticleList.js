import React from "react";
import blogData from "../data/blog";
import Article from "./Article"

function ArticleList(){
    const postsArray = blogData.posts.map(post=>{
        return <Article 
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
        
        />
    })
    
    return (
        <main>
            {postsArray}
        </main>
    )
}

export default ArticleList;