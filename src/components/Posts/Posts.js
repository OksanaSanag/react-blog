// Core
import React, { Component } from 'react';
// import moment from 'moment/locale/ru'; треба розібратися з біліотекою

// Components
import { Consumer } from '../HOC/withProfile';

// Instruments
import postsDecor from '../Posts/posts.view'

export default class Posts extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <postsDecor.block>
                        <div>
                            <postsDecor.imeg img src = { context.avatar } />
                            <postsDecor.name> {`${context.currentUserFirstName} ${context.currentUserLastName}`} </postsDecor.name>
                            <postsDecor.time> DAY & TIME </postsDecor.time>                                       
                        </div>                
                        <postsDecor.post>Hi, guys. </postsDecor.post>
                    </postsDecor.block>
                )}
            </Consumer>
            
        )
    }
}
