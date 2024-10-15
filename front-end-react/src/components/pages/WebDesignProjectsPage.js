import React from "react";
import { connect } from "react-redux";
import {
    getWebDesignProjects, getWebDesignProjectsByDatetime
} from "../../actions/webDesignProjectFirebaseActions";//change
import ProjectCard from '../cards/ProjectCard';
import { Container, Row, Col, Alert } from 'react-bootstrap'; // Import Bootstrap components
import '../styles/blogPage.css';

//This page done for the firebase framework with just links of medium
class WebDesignProjectsPage extends React.Component {
    componentWillMount() {
        //this.props.getProjects();
        this.props.getWebDesignProjectsByDatetime();
    }
    render() {
        console.log('WEBDESIGN PROJECTS');
        // console.log(this.props);
        const {
            webDesignProjects,
            error
        } = this.props;
        return (
            <Container className="web-design-projects-page-container">
                {webDesignProjects && webDesignProjects.length > 0 ? (
                    <Row className="app-card-list" id="app-card-list">
                        {
                            Object.keys(webDesignProjects).map(key => (
                                <Col key={key}>
                                    <ProjectCard index={key} project={webDesignProjects[key]} />
                                </Col>
                            ))
                        }
                    </Row>
                ) : (
                    <Alert >
                        <Alert.Heading>Error</Alert.Heading>
                        <p>{error}</p>
                    </Alert>
                )}

            </Container>
        );
    }
}

const mapStateToPropsWebDesignProjectsPage = state => {
    //In this case objects is gonna be applied to the props of the component
    return {
        webDesignProjects: state.webDesignProjectsPageReducer.webDesignProjects,
        error: state.webDesignProjectsPageReducer.error,
        language: state.constantReducer.language
    };
};

export default connect(
    mapStateToPropsWebDesignProjectsPage,
    {
        getWebDesignProjects, getWebDesignProjectsByDatetime
    }
)(WebDesignProjectsPage);
