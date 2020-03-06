// Core
import React, { Component } from 'react';
// import moment from 'moment/locale/ru'; треба розібратися з біліотекою

//Instruments
import postsDecor from '../Posts/posts.view'

export default class Posts extends Component {
    render () {
        const {
            currentUserFirstName,
            currentUserLastName,
            avatar
        } = this.props;
        return (
            <postsDecor.block>
                <div>
                    <postsDecor.imeg img src = { avatar } />
                    <postsDecor.name> {`${currentUserFirstName} ${currentUserLastName}`} </postsDecor.name>
                    <postsDecor.time> DAY & TIME </postsDecor.time>                                       
                </div>                
                <postsDecor.post>Hi, guys. </postsDecor.post>
            </postsDecor.block>
        )
    }
}
