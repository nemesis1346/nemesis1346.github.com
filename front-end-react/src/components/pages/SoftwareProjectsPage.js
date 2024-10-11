import React from "react";
import { connect } from "react-redux";
import {
    getProjects,getProjectsByDatetime
} from "../../actions/softwareProjectFirebaseActions";//change
import ProjectCard from '../cards/ProjectCard';
import { Message } from 'semantic-ui-react'
import '../styles/blogPage.scss';

//This page done for the firebase framework with just links of medium
class SoftwareProjectsPage extends React.Component {
    componentWillMount() {
        //this.props.getProjects();
        this.props.getProjectsByDatetime();
    }
    render() {
        console.log('PROJECTS');
        // console.log(this.props);
        const {
            projects,
            error
        } = this.props;
        return (
            <div>
                {projects && projects.length > 0 ? (
                    <div className="app-card-list" id="app-card-list">
                        {
                            Object
                                .keys(projects)
                                .map(key => <ProjectCard key={key} index={key} project={projects[key]} />)
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

const mapStateToPropsSoftwareProjectsPage = state => {
    //In this case objects is gonna be applied to the props of the component
    return {
        projects: state.softwareProjectsPageReducer.projects,
        error: state.softwareProjectsPageReducer.error,
        language:state.constantReducer.language
    };
};

export default connect(
    mapStateToPropsSoftwareProjectsPage,
    {
        getProjects,getProjectsByDatetime
    }
)(SoftwareProjectsPage);
