import React, {Component} from 'react'
import {HashRouter as Router, Route, Switch,} from 'react-router-dom';
import Header from './common/Header';
import Home from './pages/home';
import User from './pages/user';
import Member from './pages/member';
import Login from './pages/login';
import Protected from './higher/Protected';
import Error from './common/Error';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <div className="container-fluid" style={{marginTop: 30}}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    {/* 想进去二级路由就不能开启精确匹配了 */}
                    <Route path="/user" component={User}/>
                    {/* 会员 */}
                    <Protected exact path="/member" component={Member}/>
                    <Route exact path="/login" component={Login}/>
                    <Route component={Error}/>
                </Switch>
                </div>
            </Router>
        );
    }
}
