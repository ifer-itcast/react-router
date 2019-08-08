import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export default ({component: Component, ...res}) => (
    <Route {...res} render={(props) => {
        return localStorage.getItem("token") ? <Component {...props}/> : <Redirect to="/login"/>
    }}/>
);


// 这样 Component 可以拿到 props
{/* <Route {...res} component={Component}/> */}

// 这样 Component 可以拿到 props
{/* <Route {...res} render={(props) => <Component {...props}/>}/> */}

// localStorage.getItem('token') ? <Route {...res} component={Component}/> : <Redirect to="/login"/>

{/* <Route {...res} render={(props) => {
    return localStorage.getItem("token") ? <Component {...props}/> : <Redirect to="/login"/>
}}/> */}