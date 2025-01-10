import React from "react";
import { connect } from "react-redux";
import {
    getProjects,
    getProjectsByDatetime
} from "../../actions/softwareProjectFirebaseActions"; // Import your actions
import ProjectCard from '../cards/ProjectCard';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'; // Import Bootstrap components
import '../styles/softwareProjectsPage.css';

// This page is done for the firebase framework with just links of medium
class SoftwareProjectsPage extends React.Component {

    componentDidMount() {
        // Fetch projects when the component mounts
        this.props.getProjectsByDatetime();
    }

    render() {
        console.log('PROJECTS');
        const { projects, error, loading } = this.props;

        return (
            <Container className="software-projects-page-container">
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <Spinner animation="border" variant="primary" /> {/* Bootstrap Spinner */}
                    </div>
                ) : projects && projects.length > 0 ? (
                    <Row className="app-card-list" id="app-card-list">
                        {
                            Object.keys(projects).map(key => (
                                <Col key={key}>
                                    <ProjectCard index={key} project={projects[key]} />
                                </Col>
                            ))
                        }
                    </Row>
                ) : (
                    <Alert variant="danger">
                        <Alert.Heading>Error</Alert.Heading>
                        <p>{error || "No projects found."}</p>
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
        loading: state.softwareProjectsPageReducer.loading, 
    };
};

export default connect(
    mapStateToPropsSoftwareProjectsPage,
    {
        getProjects,
        getProjectsByDatetime
    }
)(SoftwareProjectsPage);
