import React, { Component } from 'react';
import {ThemeContext} from './theme-context';

class SicklecellStore extends Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <div {...props} style={{fontSize: theme.fontSize, color: theme.color}}>
        <div>
          <h1>Hello World Sicklecell!</h1>
          <form>
            <input type="text" name="address"/>
            <label>Address</label>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

SicklecellStore.contextType = ThemeContext;

export default SicklecellStore;
