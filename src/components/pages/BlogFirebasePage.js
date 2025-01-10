import React from "react";
import { connect } from "react-redux";
import {
    getBlogs
} from "../../actions/blogMediumActions"
import BlogCard from '../cards/BlogCard';
import { Container, Row, Alert, Col, Spinner } from 'react-bootstrap'
import '../styles/blogPage.css';

//This page done for the firebase framework with just links of medium
class BlogFirebasePage extends React.Component {
    componentWillMount() {
        //this.props.getBlogs();
        this.props.getBlogs();
    }
    render() {
        console.log('BLOG MEDIUM POSTS');
        console.log(this.props);
        const {
            posts,
            error, 
            loading
        } = this.props;
        return (
            <Container className="blog-page-container">
            {loading?(
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <Spinner animation="border" variant="primary" /> {/* Bootstrap Spinner */}
                </div>
            ) :posts && posts.length > 0 ? (
                <Row className="app-card-list" id="app-card-list">
                {
                    Object.keys(posts).map(key => (
                        <Col key={key}>
                        <BlogCard index={key} post={posts[key]} />
                        </Col>
                    ))}
                    </Row>
                ) : (
                    <Alert variant = "danger">
                    <Alert.Heading>Error</Alert.Heading>
                    <p>{error}</p>
                    </Alert>
                )}
                
                </Container>
            );
        }
    }
    
    const mapStateToPropsBlogPage = state => {
        //In this case objects is gonna be applied to the props of the component
        return {
            posts: state.blogPageReducer.posts,
            error: state.blogPageReducer.error,
            loading: state.blogPageReducer.loading, 
        };
    };
    
    export default connect(
        mapStateToPropsBlogPage,
        {
            getBlogs
        }
    )(BlogFirebasePage);
    