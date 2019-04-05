import React from 'react';
import '../styles/projectCard.scss';

class ProjectCard extends React.Component {

    render() {
        const { post } = this.props;
        console.log(post.url);
        return (
            <div className="post card">
                <div className="img-container">
                <a href={post.url} target="_blank"> 
                    <img src={post.imageUrl}></img> </a>
                </div>
                <div className="card-body">
                    <h2>{post.title}</h2>
                    <p >{post.titleText}</p>
                       <a href={post.url}  target="_blank"><i className="waves-effect waves-light btn">See Project</i></a> 
                </div>
            </div>
        )
    }
}

export default ProjectCard;