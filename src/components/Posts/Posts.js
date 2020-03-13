// Core
import React, { Component } from 'react';
// import moment from 'moment/locale/ru'; треба розібратися з біліотекою
import PropTypes from 'prop-types';

// Components
import { Consumer } from '../HOC/withProfile';

// Instruments
import postsDecor from '../Posts/posts.view';

export default class Posts extends Component {
    // static PropTypes = {
    //     comment: PropTypes.string.isRequired,
    // };

    render () {
        const { comment } = this.props;
        return (
            <Consumer>
                {(context) => (
                    <postsDecor.block>
                        <div>
                            <postsDecor.imeg img src = { context.avatar } />
                            <postsDecor.name> {`${context.currentUserFirstName} ${context.currentUserLastName}`} </postsDecor.name>
                            <postsDecor.time> DAY & TIME </postsDecor.time>                                       
                        </div>                
                        <postsDecor.post> {comment} </postsDecor.post>
                    </postsDecor.block>
                )}
            </Consumer>
            
        )
    }
}
