import React from "react";
import { connect } from "react-redux";
import {
    getBlogs,
} from "../../actions/blogActions";
import BlogCard from '../cards/BlogCard';

class BlogPage extends React.Component {
    componentWillMount() {
        this.props.getBlogs();
    }
    render() {
        const {
            posts
        } = this.props;
        return (
            <div className="blog-page-container">
                <div className="app-card-list" id="app-card-list">
                    {
                        Object
                            .keys(posts)
                            .map(key => <BlogCard key={key} index={key} details={posts[key]} />)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToPropsBlogPage = state => {
    console.log(state);
    //In this case objects is gonna be applied to the props of the component
    return {
        posts: state.blogPageReducer.posts
    };
};

export default connect(
    mapStateToPropsBlogPage,
    {
        getBlogs,
    }
)(BlogPage);
