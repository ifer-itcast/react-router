import React from 'react';
import {Link} from 'react-router-dom';

export default class Member extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                {
                    <p>哥是会员，带有光环~</p>
                }
            </div>
        );
    }
}