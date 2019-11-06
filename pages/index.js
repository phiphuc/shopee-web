import React, { Component } from 'react'
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
import _ from 'lodash';
import CardInfo from '../components/CardInfo/CardInfo';
import { NotificationContainer } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// import 'react-notifications/lib/fonts/notification.ttf';
// import 'react-notifications/lib/fonts/notification.woff';
import 'bootstrap/dist/css/bootstrap.css';
import ListSubAcc from '../components/ListSubAcc/ListSubAcc';
class Home extends Component {
  static async getInitialProps({ store, query }) {
    return {};
  }

  state = {
    data: {},
    login: false,
    info: []
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.data ||props.login !== state.login || props.info !== state.info) {
      return {
        data: props.data,
        login: props.login,
        info: props.info
      };
    }
    
  }


  render() {
    const { data, login, info } = this.state;
    return (
      <div>
        <Head>
          <title>Auto like shopee</title>
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link> */}
          <link href="https://fonts.googleapis.com/css?family=Rđoboto&display=swap" rel="stylesheet"></link>
          <link href="dist/react-notifications.css" rel="stylesheet"></link>
        </Head>
        <Layout >
          <div className="shopee__body">
            {_.isEmpty(data) ? '' :
              <>
                <div className="row">
                  <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-xs-12 ">
                    <CardInfo data={data} login={login} info={info} />
                  </div>
                </div>
                {_.isEmpty(info) ? '' : (
                  <div className="row">
                    <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-xs-12 ">
                      <ListSubAcc info={info} />
                    </div>
                  </div>
                )}
              </>
            }
          </div>
          <NotificationContainer />
        </Layout>
        <style jsx>{`
          .shopee-main {
            font-family: 'Roboto', sans-serif;
            background: #ED4D2D;
            -webkit-transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
            transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
            transition: transform .2s cubic-bezier(.4,0,.2,1);
            transition: transform .2s cubic-bezier(.4,0,.2,1),-webkit-transform .2s cubic-bezier(.4,0,.2,1);
            display: inline-flex;
        }

        .shopee-searchbar>.btn svg {
          margin: 0 auto;
        }
        .shopee__body{
          background: url(/image/shopee-ronaldo.png) center top / 100% no-repeat;
          background-color: #ED4D2D;
          min-height: 100vh;
        }

        `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data,
    login: state.dataLogin,
    info: state.info
  }
}


export default connect(mapStateToProps)(Home)
