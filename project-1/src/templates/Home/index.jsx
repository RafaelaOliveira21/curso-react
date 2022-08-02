import './styles.css';

import { Component } from 'react';

import {loadPosts} from '../../uteis/load-posts'

import { Posts } from '../../components/Posts';

export class Home extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postAndPhotos = await loadPosts();
    this.setState({ posts: postAndPhotos});
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default Home;
