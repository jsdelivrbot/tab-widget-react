import React from 'react';
import Tab from './tab';


const Tabs = (props) => {

  const tab = props.users.map((user) => {
    return <Tab setUser={ props.setUser } key={ user.name } currentUser={ props.currentUser } user={ user } />
  })

  return (
    <ul className="tabs">{tab}</ul>
  );
}

export default Tabs;
