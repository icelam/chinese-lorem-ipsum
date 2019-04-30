import { connect } from 'react-redux';
import Article from '@components/Article';

const mapStateToProps = (state) => ({
  desiredArticleLength: state.desiredArticleLength
});

const ArticleContainer = connect(
  mapStateToProps,
  null
)(Article);

export default ArticleContainer;
