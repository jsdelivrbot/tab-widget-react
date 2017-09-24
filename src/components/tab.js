import React from 'react';

const Tab = (props) => {

  const user = props.user;
  const setUser = props.setUser;
  const currentUser = props.currentUser

  return (
    <li onClick={ () => setUser(user) } className={ "tab " + ( currentUser === user ? 'active' : null ) }>
      <img className="avatar" src={ user.avatar } />
      <span>{ user.name }</span>
    </li>
  )
};

export default Tab;
