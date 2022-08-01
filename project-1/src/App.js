import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';
import {loadPosts} from './uteis/load-posts'

class App extends Component {
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
      </section>
    );
  }
}

export default App;
