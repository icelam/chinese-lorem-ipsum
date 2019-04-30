import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as articleActions from '@store/actions';
import SetArticleLength from '@components/SetArticleLength';

const mapStateToProps = (state) => ({
  allowedArticleLength: state.allowedArticleLength,
  desiredArticleLength: state.desiredArticleLength
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(articleActions, dispatch)
});

const SetArticleLengthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetArticleLength);

export default SetArticleLengthContainer;
