import React, { Component, PropTypes } from 'react'

class ProjectOverview extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  
  constructor(props) {
    super(props)

    this.state = {
      
    };
  }
    
  render() {
    console.log(this.props.projects.data);
    return (
        <div class="table-responsive">
            <table class="table">
                
            </table>
        </div>
    )
  }
}

export default ProjectOverview;


