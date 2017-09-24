import React from 'react';
import TabVerticle from './tab-verticle';


const TabsVerticle = (props) => {

  const tab = props.users.map((user, index) => {
    return <TabVerticle changeUserName={ props.changeUserName } setUser={ props.setUser } key={ index } currentUser={ props.currentUser } user={ user } index={ index } />
  })

  return (
    <ul className="tabs">{tab}</ul>
  );
}

export default TabsVerticle;
