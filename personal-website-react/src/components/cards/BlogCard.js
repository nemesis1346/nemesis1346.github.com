import React from 'react';

class BlogCard extends React.Component {

    render() {
        const { post } = this.props;

        console.log(this.props);
        console.log(post.imageUrl);
        var style = {
            backgroundImage: 'url(' + post.imageUrl + ')',
        }
        return (
            <div className="card">
                {/* Fix image header */}
                <header className="card-header" style={style}>
                </header>
                <img src= {post.imageUrl}></img>
                <div className="card-body">
                    <p className="date"></p>
                    <h2>{post.title}</h2>
                    <p className="body+content">{post.titleText} hola</p>
                    <button className="button button-primary">
                        <i className="fa fa-chevron-right">Read more...</i>
                    </button>
                </div>
            </div>
        )
    }
}

export default BlogCard;