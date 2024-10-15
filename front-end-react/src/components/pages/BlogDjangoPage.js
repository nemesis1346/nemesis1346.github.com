import React from "react";
import { connect } from "react-redux";
import {
    getBlogs,
} from "../../actions/blogDjangoActions";
import BlogCard from '../cards/BlogCard';
import { Message } from 'semantic-ui-react'
// import '../styles/blogPage.scss';

//This page done for the firebase framework with just links of medium
class BlogDjangoPage extends React.Component {
    componentWillMount() {
        this.props.getBlogs();
    }
    render() {
        console.log('POSTS');
        console.log(this.props);
        const {
            posts,
            error
        } = this.props;
        return (
            <div className="blog-page-container">
                {posts && posts.length > 0 ? (
                    <div className="app-card-list" id="app-card-list">
                        {
                            Object
                                .keys(posts)
                                .map(key => <BlogCard key={key} index={key} post={posts[key]} />)
                        }
                    </div>
                ) : (
                        <Message >
                            <Message.Header>Error</Message.Header>
                            <p>{error}</p>
                        </Message>
                    )}

            </div>
        );
    }
}

const mapStateToPropsBlogPage = state => {
    //In this case objects is gonna be applied to the props of the component
    return {
        posts: state.blogPageReducer.posts,
        error: state.blogPageReducer.error
    };
};

export default connect(
    mapStateToPropsBlogPage,
    {
        getBlogs,
    }
)(BlogDjangoPage);
