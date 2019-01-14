import React from 'react';

class BlogCard extends React.Component {

    render() {
        const { post,image } = this.props;

        console.log(this.props);
        console.log(post);
        var style = {
            backgroundImage: 'url(' + image + ')',
        }
        return (
            <div className="card">
                <header className="card-header" style={style}>
                </header>
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