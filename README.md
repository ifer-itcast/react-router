# react-router

## 目录结构

```javascript
├── src
|  ├── App.jsx              => 根组件
|  ├── common               => 公共组件
|  |  ├── Error.jsx
|  |  └── Header.jsx
|  ├── config               => 配置文件
|  |  └── config.js
|  ├── higher               => 高阶组件
|  |  ├── LinkText.js
|  |  └── Protected.js
|  ├── index.html
|  ├── index.js             => 入口文件
|  └── pages                => 页面组件
|     ├── home
|     |  └── index.jsx
|     ├── login
|     |  └── index.jsx
|     ├── member
|     |  └── index.jsx
|     └── user              => 用户页面
|        ├── component      => 用户页面下的相关组件
|        └── index.jsx
└── webpack.config.js
```

## 登陆权限

一些路由登陆后才能访问

```javascript
export default ({component: Component, ...res}) => (
    <Route {...res} render={(props) => {
        return localStorage.getItem("token") ? <Component {...props}/> : <Redirect to="/login"/>
    }}/>
);
```

```javascript
<Protected exact path="/member" component={Member}/>
```

## 期望 NavLink 的 active 加在父级上

```javascript
export default comProps => (
    <Route path={comProps.to} exact={comProps.exact} children={routeProps => (
        <li className={routeProps.match ? 'active' : ''}>
            <Link className="nav-link" to={comProps.to}>{comProps.children}</Link>
        </li>
    )}/>
)
```

```javascript
<ul>
    <LinkText exact className="nav-item" to="/">首页</LinkText>
</ul>
```

