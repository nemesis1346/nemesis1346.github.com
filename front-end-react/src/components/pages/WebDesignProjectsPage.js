import React from "react";
import { connect } from "react-redux";
import {
    getWebDesignProjects, getWebDesignProjectsByDatetime
} from "../../actions/webDesignProjectFirebaseActions";//change
import ProjectCard from '../cards/ProjectCard';
import { Message } from 'semantic-ui-react'
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
            <div>
                {webDesignProjects && webDesignProjects.length > 0 ? (
                    <div className="app-card-list" id="app-card-list">
                        {
                            Object
                                .keys(webDesignProjects)
                                .map(key => <ProjectCard key={key} index={key} project={webDesignProjects[key]} />)
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
