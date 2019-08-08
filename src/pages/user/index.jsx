import React from 'react';
import { Link, Route, Redirect, NavLink, Switch } from 'react-router-dom';
import UserAdd from './component/UserAdd';
import UserList from './component/UserList';
import UserDetail from './component/UserDetail';
import Error from '../../common/Error';

export default class User extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-3">
					<ul className="list-group">
						<li className="list-group-item">
							<NavLink to="/user/add">添加用户</NavLink>
						</li>
						<li className="list-group-item">
							<NavLink to="/user/list">用户列表</NavLink>
						</li>
					</ul>
				</div>
				<div className="col-md-9">
					<Switch>
						{/* 访问 user 跳转 /user/add */}
						<Route exact path="/user" render={() => <Redirect to="/user/add" />} />
						<Route path="/user/add" component={UserAdd} />
						<Route exact path="/user/list" component={UserList} />
						<Route exact path="/user/list/detail/:id" component={UserDetail} />
						<Route component={Error}/>
					</Switch>
				</div>
			</div>
		);
	}
}
