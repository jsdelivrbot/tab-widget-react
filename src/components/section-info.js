import React, { Component } from 'react';

class SectionInfo extends Component {
  constructor(props) {
    super(props);

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
      <div>
        <section>
          <div className="user-info">
            <div className="row">
              <div className="col-xs-2">
                <img className="avatar" src={ this.props.currentUser.avatar } />
              </div>
              <div className="col-xs-10">
                <label
                onClick={ () => this.InputEditOn() }
                className={ "label " + (this.state.inputEdit ? 'off' : 'on')}><strong>{ this.props.currentUser.name }</strong></label>
                <input
                onBlur={ (e) => {this.InputEditOff(), this.props.changeUserName(this.props.index, e.target.value)}}
                className={ "input " + (this.state.inputEdit ? 'on' : 'off') } type="text" placeholder={ this.props.currentUser.name } />
                <p>points: { this.props.currentUser.points }</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SectionInfo;
