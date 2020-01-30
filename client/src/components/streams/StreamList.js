import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams()
  }

  renderList = () => {
    return this.props.streams.map(stream => {
      return (
        <div className='item'>
          <i className='large middle aligned icon camera' />
          <div className='content'>
            <b style={{ fontSize: '26px' }}>{stream.title}</b>
            <div className='description'>{stream.description}</div>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList)
