import React from 'react';
import '../styles/blogCard.scss';

class BlogCard extends React.Component {

    render() {
        const { post } = this.props;
        return (
            <div className="post card">
                <div className="img-container">
                <a href={post.url} target="_blank"> 
                    <img src={post.imageUrl}></img> </a>
                </div>
                <div className="card-body">
                    <p >{post.date}</p>
                    <h2>{post.title}</h2>
                    <p >{post.titleText}</p>
                    <button className="button button-primary">
                       <a href={post.url}><i className="fa fa-chevron-right">Read more...</i></a> 
                    </button>
                </div>
            </div>
        )
    }
}

export default BlogCard;