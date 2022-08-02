import './styles.css';

import { Component } from 'react';

import {loadPosts} from '../../uteis/load-posts'

import { Posts } from '../../components/Posts';
import { Button } from '../../Button';

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2,
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postAndPhotos = await loadPosts();
    this.setState({ 
      posts: postAndPhotos.slice(page, postsPerPage), 
      allPosts: postAndPhotos, 
    });
  }

  loadMorePosts = () => {
    console.log("Load more posts chamado");
  }

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <Button 
          text="Load more posts"
          onClick={this.loadMorePosts}
        />
      </section>
    );
  }
}

export default Home;
