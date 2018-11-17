import React, { Component }                 from 'react';
import {connect}                            from 'react-redux';
import PropTypes                            from 'prop-types';
import AppContent                           from './parts/Content';
import AppFooter                            from './parts/Footer';
import AppHeader                            from './parts/Header/Header';
import { fetchAuthUser }                    from 'store/auth/actions';
import {setAuthHeader, tokenRestore}        from 'helpers/storage';

class DefaultLayout extends Component {

  static propTypes = {
      children: PropTypes.node.isRequired,
      footer:PropTypes.bool,
      fetchAuthUser: PropTypes.func,
      user:PropTypes.object,
  };

  componentDidMount() {
      if(!this.props.user.id && tokenRestore()) {
          setAuthHeader();
          this.props.fetchAuthUser();
      }
  }

  constructor(props){
      super(props);
  }

  render() {
      return (
          <div className={'flex flex-center flex-column'}>
              <AppHeader />
              <AppContent>
                  { this.props.children }
              </AppContent>
              {this.props.footer !== false &&
                <AppFooter/>
              }
          </div>
      );
  }
}

const mapStateToProps = (store) => ({
    user:store.auth.user,
    status:store.auth.status
});

const mapDispatchToProps = (dispatch) => ({
    fetchAuthUser: () => dispatch(fetchAuthUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);

