import React, { Component } from 'react'
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
import _ from 'lodash';
import CardInfo from '../components/CardInfo/CardInfo';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {RESET_LOGIN} from '../actions/index'
import 'react-notifications/lib/notifications.css';
import 'bootstrap/dist/css/bootstrap.css';
class Home extends Component {
  static async getInitialProps({ store, query }) {
    return {};
  }

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      login: {}
    }
  }

  
  UNSAFE_componentWillReceiveProps(nextProps) {
    if(!_.isEmpty(nextProps.login)){
      switch(nextProps.login.errorCode){
                case 0: NotificationManager.success('Thành công', 'Thêm tài khoản phụ thành công'); return
                case 1: NotificationManager.error('Lỗi', 'Sai số điện thoại hoặc mật khẩu'); return
                case 2: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); return
                case 3: NotificationManager.error('Lỗi', 'Đăng nhập vượt quá số lần cho phép'); return
                default: NotificationManager.error('Lỗi', 'Hệ thống tạm thời gián đoạn,vui lòng thử lại sau vài phút');
            }
            dispatch({type:RESET_LOGIN,payload: nextProps.login});
    }
    this.setState({
      data: nextProps.data,
      login: nextProps.login
    })

  }

  render() {
    const { data, login } = this.state;
    return (
      <div>
        <Head>
          <title>Auto like shopee</title>
          {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link> */}
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        </Head>
        <Layout >
          <div className="shopee__body">
            {_.isEmpty(data) ? '' :
              <div className="row">
                <div className="col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-xs-12 ">
                  <CardInfo data={data} login = {login} />
                </div>
              </div>
            }
          </div>
          <NotificationContainer/>
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
    login: state.dataLogin
  }
}


export default connect(mapStateToProps)(Home)