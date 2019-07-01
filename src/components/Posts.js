import React, {Component} from 'react';
import LoaderHOC from "./LoaderHOC";

class Posts extends Component {
    render() {
        return (
            <div>
                <h1>Posts</h1>
                <div>
                    {
                       this.props.posts.map(post =>
                        <p key={post.id}>{post.title}</p>
                       )
                    }
                </div>
            </div>
        );
    }
}

export default LoaderHOC(Posts, 'posts');

