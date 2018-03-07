import React, { Component } from 'react';

export class TabPanel extends Component {
  constructor(props) {
    super(props);
    this.onTabClick = this.onTabClick.bind(this);
    this.state = {
      selectedIndex: 0
    };
  }

  onTabClick(e) {
    e.preventDefault();
    const index = parseInt(e.target.getAttribute('data-index'), 10);
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <React.Fragment>
        <ul className="nav nav-tabs">
          {this.props.children.map((child, index) => {
            const isActive = (index === this.state.selectedIndex);
            return (
              <li key={index} className="nav-item">
                <a className={"nav-link " + (isActive ? "active" : "")}
                  tabIndex="0"
                  role="button"
                  data-index={index}
                  onClick={this.onTabClick}>{child.props.text}</a>
              </li>
            )
          })}
        </ul>
        <div className="tab-content">
          {this.props.children[this.state.selectedIndex]}
        </div>
      </React.Fragment>
    )
  }
}

export class Tab extends Component {
  render() {
    return (
      <div className="tab-pane active" role="tabpanel">
        {this.props.children}
      </div>
    )
  }
}
