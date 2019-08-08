import React from 'react';

export default class UserList extends React.Component {
	state = {
		lists: []
	};
	componentWillMount() {
		// 霍
		const lists = JSON.parse(localStorage.getItem('lists')) || [];
		// 秀

		// 春

		// 宣
		this.setState({ lists });
    }
    handleClick = (id) => {
        // 详情
        this.props.history.push(`/user/list/detail/${id}`);
    }
	render() {
		const { lists } = this.state;
		return lists.length
			? <div>
					<button className="btn btn-primary" onClick={() => this.props.history.goBack()}>
						返回
					</button>
					<ul className="list-group list-group-flush" style={{ marginTop: 20 }}>
						{lists.map(item =>
							<li className="list-group-item" key={item.id} onClick={() => this.handleClick(item.id)}>
								<a href="javascript:;">{item.info}</a>
							</li>
						)}
					</ul>
				</div>
			: <div>铁，没有用户呀~</div>;
	}
}
