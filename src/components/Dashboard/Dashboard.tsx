import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Landing extends Component {
  render() {
    return (
      <div>
        This is the Landing component
         <Link to="/dummy">GO THERE</Link>
      </div>
    )
  }
}
