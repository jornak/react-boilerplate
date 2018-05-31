import React, {Component} from "react"
import {logoutUseraAction, getUser} from "../../containers/App/actions"
import {makeSelectConfiguration,} from "../../containers/App/selectors"
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import injectSaga from '../../utils/injectSaga';
import saga from "./saga";
import {loadPrivateAction, loadPublicAction} from "./actions";
import {createStructuredSelector} from "reselect";


const mapStateToProps = createStructuredSelector({
  configuration: makeSelectConfiguration()
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loadPrivateAction, loadPublicAction}, dispatch)
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'security', saga});

export const withSecurity = (injectedProps: ["public", "private"]) => WrappedComponent => {

  class InitiateSecurity extends Component {

    componentDidMount() {
      switch (injectedProps) {
        case "public":
          this.props.loadPublicAction()
          break;
        case "private":
          this.props.loadPrivateAction()
          break;
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return withSaga(withConnect(InitiateSecurity))
}

export const withPublic = withSecurity("public")
export const withPrivate = withSecurity("private")
