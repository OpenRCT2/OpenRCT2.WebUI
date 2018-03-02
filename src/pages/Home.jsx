import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { News } from '../selectors';
import './Home.css';
import logo from '../img/logo.png';

class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.onPublishClick = this.onPublishClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onHtmlChange = this.onHtmlChange.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);

    const { title, html } = this.props.newsItem;
    this.state = {
      isEditing: false,
      newTitle: title,
      newHtml: html
    };
  }

  onPublishClick(e) {
    e.preventDefault();
    const { editNewsItem } = this.props;
    const { id } = this.props.newsItem;
    const { newTitle, newHtml } = this.state;
    editNewsItem(id, newTitle, newHtml, true);
  }

  onEditClick(e) {
    e.preventDefault();
    this.setState({ isEditing: true });
  }

  onDeleteClick(e) {
    e.preventDefault();

    const { deleteNewsItem } = this.props;
    const { id } = this.props.newsItem;
    deleteNewsItem(id);
  }

  onTitleChange(e) {
    this.setState({ newTitle: e.target.value });
  }

  onHtmlChange(e) {
    this.setState({ newHtml: e.target.value });
  }

  onSaveClick(e) {
    e.preventDefault();

    const { editNewsItem } = this.props;
    const { id, isPublished } = this.props.newsItem;
    const { newTitle, newHtml } = this.state;
    editNewsItem(id, newTitle, newHtml, isPublished ? true : null).then(
      () => this.setState({ isEditing: false })
    );
  }

  onCancelClick(e) {
    e.preventDefault();
    this.setState({ isEditing: false });
  }

  render() {
    const { isEditing, newTitle, newHtml } = this.state;
    const { title, date, author, html, isPublished } = this.props.newsItem;
    let cardStyle = {};
    if (!isPublished) {
      cardStyle.backgroundColor = '#ffe';
    }
    if (isEditing) {
      return (
        <div className="card news-item" style={cardStyle}>
          <div className="card-body">
            <input className="card-title form-control" onChange={this.onTitleChange} value={newTitle} />
            <h6 className="card-subtitle mb-2 text-muted">{date} by {author}</h6>
            <textarea className="form-control" rows="10" onChange={this.onHtmlChange} value={newHtml} />
            <div className="mt-3 pull-right">
              <button type="submit" className="btn btn-primary" onClick={this.onSaveClick}>Save</button>&nbsp;
              <button className="btn btn-secondary" onClick={this.onCancelClick}>Cancel</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="card news-item" style={cardStyle}>
          <div className="card-body">
            <div className="edit-links">
              {!isPublished &&
                <a role="button" tabIndex="0" onClick={this.onPublishClick}>[publish]</a>
              }
              &nbsp;<a role="button" tabIndex="0" onClick={this.onEditClick}>[edit]</a>&nbsp;
              <a role="button" tabIndex="0" onClick={this.onDeleteClick}>[delete]</a>
            </div>
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{date} by {author}</h6>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      )
    }
  }
}
NewsItem.propTypes = {
  deleteNewsItem: PropTypes.func.isRequired,
  editNewsItem: PropTypes.func.isRequired,
  newsItem: PropTypes.object.isRequired,
};
NewsItem.contextTypes = {
  store: PropTypes.object
};

const propTypes = {
  deleteNewsItem: PropTypes.func.isRequired,
  editNewsItem: PropTypes.func.isRequired,
  fetchNewsItems: PropTypes.func.isRequired,
  isFetchingNews: PropTypes.bool.isRequired,
  hasFetchedNews: PropTypes.bool.isRequired,
  newsItems: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  isFetchingNews: News.hasFetched(state),
  hasFetchedNews: News.isFetching(state),
  newsItems: News.getItems(state),
});

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.onCreateClick = this.onCreateClick.bind(this);
  }

  componentDidMount() {
    const { fetchNewsItems, hasFetchedNews } = this.props;
    if (!hasFetchedNews) {
      fetchNewsItems(0, 3);
    }
  }

  onCreateClick(e) {
    e.preventDefault();
    const { createNewsItem } = this.props;
    createNewsItem('News item title...', '<p>Your news item content...</p>')
  }

  render() {
    const renderCreateNewsItem = () => (
      <div className="card news-item">
        <div className="card-body">
          <a role="button" tabIndex="0" onClick={this.onCreateClick}>Create news item</a>&nbsp;
        </div>
      </div>
    );

    const renderNewsList = () => {
      const { deleteNewsItem, editNewsItem, newsItems } = this.props;
      if (newsItems) {
        return (
          <React.Fragment>
            {renderCreateNewsItem()}
            {newsItems.map((newsItem, index) => (
                <NewsItem key={newsItem.id} newsItem={newsItem} deleteNewsItem={deleteNewsItem} editNewsItem={editNewsItem} />
            ))}
          </React.Fragment>
        )
      } else {
        return (<div>Refreshing news items...</div>)
      }
    };
    return (
      <React.Fragment>
        <div id="home-banner" className="container page-banner page-banner-home">
          <div className="promo">
            <img src={logo} alt="OpenRCT2" />
            <strong>OpenRCT2</strong> is an open source re-implementation of RollerCoaster Tycoon 2.
            </div>
        </div>
        <div className="container container-main">
          <div className="row">
            <div className="col-8">
              <h2>News</h2>
              {renderNewsList()}
            </div>
            <div className="col">
              <a className="no-link-decor" href="https://openrct2.org">
                <div id="home-download-button">
                  <i className="fa fa-download"></i> Download <strong>OpenRCT2</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = propTypes;
HomePage = connect(mapStateToProps, actions)(HomePage);
