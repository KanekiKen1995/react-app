import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import * as actions from './actions';
import { makeSelectUsername, pageOneReducer } from './selectors';
import reducer from './reducer';
import saga from './saga';
import PageOne from './PageOne';

const mapDispatchToProps = dispatch => ({
  showName: name => dispatch(actions.showName(name)),
  showName2: name => dispatch(actions.showName2(name)),
  onSubmitForm: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  },
});

const mapStateToProps = createStructuredSelector({
  pageOneReducer: pageOneReducer,
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'PageOne', reducer });
const withSaga = injectSaga({ key: 'PageOne', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PageOne);
export { mapDispatchToProps };
