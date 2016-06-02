import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchProjects } from '../actions/projects';
import ProjectOverview from '../components/ProjectOverview';

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
    console.log(this.props.projects.data);
    return (
      <section>
        <div>
          Dashboard
        </div>
        <div className="row">
        
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
    projects: state.projects,
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);


