import React from 'react';

export default class UserAdd extends React.Component {
    state = {
        val: ""
    }
    handleChange = (e) => {
        this.setState({
            val: e.target.value
        });
    }
    handleKeyUp = (e) => {
        if(e.keyCode === 13) {
            // 霍
            const lists = JSON.parse(localStorage.getItem('lists')) || [];
            // 秀
            lists.unshift({
                id: Date.now(),
                info: e.target.value
            });
            // 春
            localStorage.setItem('lists', JSON.stringify(lists));
            // 宣
            this.props.history.push('/user/list');
        }
    }
    render() {
        const {val} = this.state;
        return (
            <div>
                <input value={val} type="email" className="form-control" placeholder="Enter con..." onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
            </div>
        );
    }
}