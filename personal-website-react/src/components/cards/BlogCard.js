import React from 'react';

class BlogCard extends React.Component {

    render() {
        const { image, title, titleText } = this.props;

        var style = {
            backgroundImage: 'url(' + image + ')',
        }
        return (
            <div className="card">
                <header className="card-header" style={style}>
                </header>
                <div className="card-body">
                    <p classname="date"></p>
                    <h2>{title}</h2>
                    <p className="body+content">{titleText} hola</p>
                    <button className="button button-primary">
                        <i className="fa fa-chevron-right">Read more...</i>
                    </button>
                </div>
            </div>
        )
    }
}

export default BlogCard;