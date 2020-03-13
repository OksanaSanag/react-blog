// Core
import React, { Component } from 'react';

// Components
import Composer from '../Composer/Composer';
import Posts from '../Posts/Posts';
import StatusBar from '../StatusBar/Statusbar';
import Spinner from '../Spinner/Spinner';

// Instruments
import feedDecor from '../Feed/feed.view';

export default class Feed extends Component {
    state = {
        posts: [ 
            {id: '2', comment: 'Hi'}, 
            {id: '3', comment: 'Hello'}
        ],
        isSpin: false, //спінер не крутиться, при тру буде крутитися. Передаєм стан зі стейта в isSpinning
    }
    render() {
        const { posts } = this.state;
        const { isSpin } = this.state;

        const postsJSX = posts.map((post) => {
            return <Posts key = { post.id } { ...post } />;
        })
        return (
            <feedDecor.feedBlock>
                < Spinner isSpinning = { isSpin } /> 
                < StatusBar />
                < Composer />
                { postsJSX }
            </feedDecor.feedBlock>
        );
    }
}