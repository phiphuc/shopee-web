import React, { Component } from 'react'
import Head from 'next/head';
import Layout from '../components/Layout/Layout';
import { connect } from 'react-redux';
class Home extends Component{
  static async getInitialProps({ store, query }) {
    return {};
  }

  render(){
    return (
      <div>
        <Head>
          <title>Auto like shopee</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        </Head>
        <Layout >
          <div className="shopee__body">

          </div>
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
    prop: state.data
  }
}

export default connect(mapStateToProps)(Home)
