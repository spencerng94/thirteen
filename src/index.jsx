import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        view: 'feed'
      }
  
      this.changeView = this.changeView.bind(this);
    }
  
    changeView(option) {
      this.setState({
        view: option
      });
    }
  
    renderView() {

    }

    render() {
      return (
        <div>
          <div className="nav">
            <span className="logo"
              onClick={() => this.changeView('feed')}>
              thirteen
            </span>
            <span className={this.state.view === 'feed'
              ? 'nav-selected'
              : 'nav-unselected'}
              onClick={() => this.changeView('feed')}>
              See all Posts
            </span>
            <span className="nav-unselected">
              Write a Post
            </span>
            <span className="nav-unselected">
              Admin
            </span>
          </div>
  
          <div className="main">
            {this.renderView()}
          </div>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('thirteen'));