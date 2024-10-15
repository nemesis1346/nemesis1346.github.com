import React from "react";
import { connect } from "react-redux";
import {
    getProjects,
    getProjectsByDatetime
} from "../../actions/softwareProjectFirebaseActions"; // Import your actions
import ProjectCard from '../cards/ProjectCard';
import { Container, Row, Col, Alert } from 'react-bootstrap'; // Import Bootstrap components
import '../styles/softwareProjectsPage.css'

// This page is done for the firebase framework with just links of medium
class SoftwareProjectsPage extends React.Component {
    componentWillMount() {
        // Fetch projects when the component mounts
        this.props.getProjectsByDatetime();
    }

    render() {
        console.log('PROJECTS');
        const { projects, error } = this.props;

        return (
            <Container className="software-projects-page-container">
                {projects && projects.length > 0 ? (
                    <Row className="app-card-list" id="app-card-list">
                        {
                            Object.keys(projects).map(key => (
                                <Col >
                                    <ProjectCard index={key} project={projects[key]} />
                                </Col>
                            ))
                        }
                    </Row>
                ) : (
                    <Alert variant="danger">
                        <Alert.Heading>Error</Alert.Heading>
                        <p>{error}</p>
                    </Alert>
                )}
            </Container>
        );
    }
}

const mapStateToPropsSoftwareProjectsPage = state => {
    // In this case objects are going to be applied to the props of the component
    return {
        projects: state.softwareProjectsPageReducer.projects,
        error: state.softwareProjectsPageReducer.error,
        language: state.constantReducer.language
    };
};

export default connect(
    mapStateToPropsSoftwareProjectsPage,
    {
        getProjects,
        getProjectsByDatetime
    }
)(SoftwareProjectsPage);