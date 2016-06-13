import React, { Component, PropTypes } from 'react'
import { fetchProjectData } from '../actions/projectdata';
import { connect } from 'react-redux';
import moment from 'moment';

class SelectProject extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props)

    this.state = {
      currentProject: null,
      startdate: moment().format("YYYY-MM-DD"),
      enddate: moment().format("YYYY-MM-DD"),
    };
  }

  renderOptions(){
    return this.props.projects.map((obj) => {
      return <option key={obj._id} value={obj._id}>{obj.name[0]}</option>;
    });
  }

  changeProject(e){
    this.setState({currentProject: e.target.value})
  }

  changeStartdate(e){
    this.setState({startdate: e.target.value})
  }

  changeEnddate(e){
    this.setState({enddate: e.target.value})
  }

  fetchData(e){
    e.preventDefault();
    this.props.dispatch(fetchProjectData(this.state.currentProject, this.state.startdate, this.state.enddate));
  }

  render() {
    return (
      <form onSubmit={this.fetchData.bind(this)}>
        <div className="select-project form-group">
          <select className="form-control" onChange={this.changeProject.bind(this)}>
            <option/>
            {this.renderOptions()}
          </select>
        </div>
        <div className="form-group">
          <input type="text" value={this.state.startdate} onChange={this.changeStartdate.bind(this)} />
        </div>
        <div className="form-group">
          <input type="text" value={this.state.enddate} onChange={this.changeEnddate.bind(this)} />
        </div>
        <div className="form-group">
          <input type="submit" value="submit" />
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
    projectdata: state.projectdata
});

//export default SelectProject;
export default connect(mapStateToProps)(SelectProject);
