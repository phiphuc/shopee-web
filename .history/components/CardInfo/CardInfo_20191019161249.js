import React, { Component } from 'react'
import LogoFollow from './../Logo/LogoFollow';
import LogoFollowing from './../Logo/LogoFollowing';
import LogoProduct from './../Logo/LogoProduct';
import LogoRate from './../Logo/LogoRate';
import LogoAddress from './../Logo/LogoAddress';
import Login from '../Popup/Login';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getOtpAction } from '../../actions/index';

class CardInfo extends Component {
    constructor(props) {
        super(props);
        console.log(props.data)
        this.state = {
            data: props.data,
            modal: false,
            username: '',
            password: '',
            dataLogin: props.login,
            otp:''
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(
            {modal: !this.state.modal}
        );
    }

    changeValue = (e) => {
        console.log(e.currentTarget.id)
        this.setState({
            username: 'username' === e.currentTarget.id ? e.target.value : this.state.username,
            password: 'password' === e.currentTarget.id ? e.target.value : this.state.password,
            otp: 'otp' === e.currentTarget.id ? e.target.value : this.state.otp
        })

    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.login && nextProps.login.errorCode !== 0){
            
        }
        this.setState({
            dataLogin: nextProps.login,
            data: nextProps.data
        })
    }

    componentWillUnmount() {
        this.setState({
            dataLogin: ''
        })
    }
    render() {
        const { data, username, password, dataLogin, otp, modal } = this.state
        return (
            <div id="card" className="card" style={{ width: '100%' }}>
                <div className="card-header">
                    <h3 className="text-center">Thông tin shop</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-center">{data.name}</h5>
                    <p className="card-text"><LogoProduct />Sản phẩm: {data.item_count}</p>
                    <p className="card-text"><LogoFollowing />Đang theo dõi: {data.follow}</p>
                    <p className="card-text"><LogoFollow />Người theo dõi: {data.following}</p>
                    <p className="card-text"><LogoRate />Đánh giá: {data.rate}</p>
                    <p className="card-text"><LogoAddress />Địa chỉ: {data.address}</p>
                </div>
                <div className="card-footer text-center">
                    <button onClick={this.toggle} type="button" className="btn btn-solid-primary btn--s btn--inline">Thêm shop phụ</button>
                </div>
                <Login show={modal} data= {data} dataLogin={dataLogin} onHide={() => this.toggle()} getOtp={this.props.getOtp} getLogin={() => this.props.getLogin(param)} />
        

                <style jsx>{`
                .shopee-svg-icon {
                    display: inline-block;
                    width: 1em;
                    height: 1em;
                    fill: currentColor;
                    position: relative;
                }
                .btn-solid-primary {
                    color: #fff;
                    background: #ee4d2d;
                }
    
                .btn--s {
                    height: 34px;
                    padding: 0 15px;
                    min-width: 60px;
                    max-width: 190px;
                }
    
                .btn {
                    overflow: hidden;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    -webkit-flex-direction: column;
                    -moz-box-orient: vertical;
                    -moz-box-direction: normal;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    font-size: 14px;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    box-shadow: 0 1px 1px 0 rgba(0,0,0,.09);
                    border-radius: 2px;
                    border: 0;
                    display: -webkit-flex;
                    display: -moz-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -moz-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -moz-box-pack: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    text-transform: capitalize;
                    outline: 0;
                    cursor: pointer;

                    width: 40%;
                    margin-left: 30%;
                    margin-right: 30%;
                }
    
                .btn-solid-primary:active {
                    background: #d2391b;
                }

                #password {
                    margin-top: 1em;
                }
                `}</style>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getOtp: (info) => {
            dispatch(getOtpAction(info))
        },
        getLogin: (info) => {
            dispatch(getLoginAction(info))
        }
    }
}



export default connect(null, mapDispatchToProps)(CardInfo)