import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchProjects } from '../actions/projects';
import SelectProject from '../components/SelectProject';
import ProjectData from '../components/ProjectData';

class Dashboard extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props)

    this.state = {

    };
  }

  componentWillMount(){
    this.props.dispatch(fetchProjects());
  }

  render() {
    if (this.props.projects.data) {
      return (
        <section>
          <div>
            Dashboard
          </div>
          <div className="row">
            <SelectProject projects={this.props.projects.data} />
          </div>
          <div className="row">
            <ProjectData offer="" data={this.props.projectdata.data}/>
          </div>
        </section>
      )
    }else{
      return (
        <section>
          <div>Loading</div>
        </section>
      )
    }
  }
}

const mapStateToProps = (state) => ({
    projects: state.projects,
    auth: state.auth,
    projectdata: state.projectdata
});

export default connect(mapStateToProps)(Dashboard);
