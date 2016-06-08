import React, { Component, PropTypes } from 'react'
import { fetchProjectData } from '../actions/projectdata';
import moment from 'moment';
import MetaData from './MetaData';

class ProjectData extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props)

    this.state = {
    };
  }

  parseMetaData(meta) {
    let data = []

    for(let key in meta){
      if(!meta.hasOwnProperty(key)) continue;

      let obj = meta[key]
      let propArr = [];
      for(let prop in obj){
        if(!obj.hasOwnProperty(prop)) continue;

        propArr.push({
          name: prop,
          value: obj[prop]
        });
      }

      data.push({
        name: key,
        data: propArr
      })
    }

    return data;
  }

  render() {
    if(this.props.data){
      let meta = this.parseMetaData(this.props.data.meta);
      return (
        <section>
          <div className="row">
            <table className="table-bordered">
              <thead>
                <tr>
                  <th>Impressions</th>
                  <th>Clicks</th>
                  <th>Conversions</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.data.impressions}</td>
                  <td>{this.props.data.clicks}</td>
                  <td>{this.props.data.conversions}</td>
                  <td>{this.props.data.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <MetaData data={meta} />
          </div>
        </section>
      )
    }else{
      return (
        <div>No Data</div>
      )
    }
  }
}

export default ProjectData;
