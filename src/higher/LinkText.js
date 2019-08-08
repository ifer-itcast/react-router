import React from 'react';
import {Link, Route} from 'react-router-dom';

// comProps => exact、className、to
export default comProps => (
    <Route path={comProps.to} exact={comProps.exact} children={routeProps => (
        <li className={routeProps.match ? 'active' : ''}>
            <Link className="nav-link" to={comProps.to}>{comProps.children}</Link>
        </li>
    )}/>
)

{/* <LinkText exact className="nav-item" to="/">
    首页
</LinkText> */}

{/* <Route path="/" exact={true} children={props => (
    <li className={props.match ? 'active' : ''}>
        <Link className="nav-link" to={comProps.to}>{comProps.children}</Link>
    </li>
)}/> */}