import React, { Component, PropTypes } from 'react'
import moment from 'moment';


class MetaData extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props)

    this.state = {
      active: []
    };
  }

  generateMeta(){
    return this.props.data.map((obj) => {
      return (
        <div className="row" key={obj.name}>
          <div style={styles.metaContainer}>
            <p style={styles.metaTitle}>{obj.name}</p>
          
            <table className="table-hover table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Impressions</th>
                  <th>Clicks</th>
                  <th>CTR</th>
                  <th>Conversions</th>
                  <th>Value</th>
                  <th>EPC</th>
                  <th>EPV</th>
                  <th>RPM</th>
                </tr>
              </thead>
              <tbody style={styles.metaTable}>
                {obj.data.map((prop) => {
                  return (
                    <tr key={prop.name}>
                      <td>{prop.name}</td>
                      <td>{prop.value.impressions}</td>
                      <td>{prop.value.clicks}</td>
                      <td>{prop.value.clicks / prop.value.impressions}</td>
                      <td>{prop.value.conversions}</td>
                      <td>{prop.value.value}</td>
                      <td>{prop.value.value / prop.value.clicks}</td>
                      <td>{prop.value.value / prop.value.impressions}</td>
                      <td>{prop.value.value / ( prop.value.impressions / 1000)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
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

let styles = {
  metaContainer: {
    margin: 15,
  },
  metaTitle: {
    marginBottom: 15,
    marginTop: 15,
    fontWeight: 'bold',
  },
  metaTable: {
    height: 300,
    overflowY: 'scroll'
  }
}

export default MetaData;
