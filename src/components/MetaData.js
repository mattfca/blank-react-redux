import React, { Component, PropTypes } from 'react'
import moment from 'moment';


class MetaData extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props)

    this.state = {
    };
  }

  generateMeta(){
    return this.props.data.map((obj) => {
      return (
        <div className="row" key={obj.name}>
          <h2>{obj.name}</h2>
          <table className="table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Impressions</th>
                <th>Clicks</th>
                <th>Conversions</th>
                <th>Value</th>
                <th>EPC</th>
              </tr>
            </thead>
            <tbody>
              {obj.data.map((prop) => {
                return (
                  <tr key={prop.name}>
                    <td>{prop.name}</td>
                    <td>{prop.value.impressions}</td>
                    <td>{prop.value.clicks}</td>
                    <td>{prop.value.conversions}</td>
                    <td>{prop.value.value}</td>
                    <td>{prop.value.value / prop.value.clicks}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    });
  }

  render() {
    return (
      <div>{this.generateMeta()}</div>
    )
  }
}

export default MetaData;
