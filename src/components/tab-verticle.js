import React, { Component } from 'react';

class TabVerticle extends Component {
  constructor(props){
    super(props)

    this.state = {
      inputEdit: false
    }

  }

  InputEditOn = () => {
    this.setState({ inputEdit: true })
  }

  InputEditOff = () => {
    this.setState({ inputEdit: false })
  }

  render() {
    return (
      <li
        onClick={ () => this.props.setUser(this.props.user) }
        className={ "tab " + ( this.props.currentUser === this.props.user ? 'active' : null ) }>
        <div className="row">
          <div className="col-xs-3">
            <img className="avatar" src={ this.props.user.avatar } />
          </div>
          <div className="col-xs-9">
            <label onClick={ () => this.InputEditOn() }
            className={ "label " + (this.state.inputEdit ? 'off' : 'on')}><strong>{ this.props.user.name }</strong></label>
            <input onBlur={ (e) => {this.InputEditOff(), this.props.changeUserName(this.props.index, e.target.value)}}
            className={ "input " + (this.state.inputEdit ? 'on' : 'off') } type="text" placeholder={ this.props.user.name } />
            <p>points: { this.props.user.points }</p>
          </div>
        </div>
      </li>
    )
  }
};

export default TabVerticle;
