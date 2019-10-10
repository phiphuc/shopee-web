import React, { Component } from 'react';
import LogoSearch from '../Logo/LogoSearch';
import { GET_MAIN_INFO_SHOP } from '../../actions/index';
import  { connect } from 'react-redux';
class FormInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkShop: ''
        }
    }

    changeInput = (e) => {
        this.setState({
            linkShop: e.target.value
        })
    }

    searchShopMain = () => {
        
    }


    render() {
        const { linkShop } = this.state;
        return (
            <div className="header-with-search__search-section">
                <div className="shopee-searchbar">
                    <div className="shopee-searchbar__main">
                        <form role="search" className="shopee-searchbar-input" autoComplete="off">
                            <input value={linkShop} onChange={(e) => this.changeInput(e)} className="shopee-searchbar-input__input" maxLength={128} placeholder="Điền link shop chính" autoComplete="off" />
                        </form>
                    </div>
                    <button onClick={() => this.props.searchShopMain(linkShop)} type="button" className="btn btn-solid-primary btn--s btn--inline" ><LogoSearch /></button>
                </div>
                <style jsx>{`
            .header-with-search__search-section {
                padding: 2em;
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-flex-direction: column;
                -moz-box-orient: vertical;
                -moz-box-direction: normal;
                -ms-flex-direction: column;
                -webkit-box-pack: start;
                -webkit-justify-content: flex-start;
                -moz-box-pack: start;
                -ms-flex-pack: start;
                width: 840px;
                position: relative;
                position: relative;
            }
            .shopee-searchbar {
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: stretch;
                -webkit-align-items: stretch;
                -moz-box-align: stretch;
                -ms-flex-align: stretch;
                align-items: stretch;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                -moz-box-pack: justify;
                -ms-flex-pack: justify;
                justify-content: space-between;
                height: 2.5rem;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                padding: .1875rem;
                border-radius: 2px;
                background: #fff;
            }
            .header-with-search-wrapper .shopee-searchbar-input {
                background-color: #fff;
                border-color: #fff;
            }

            .shopee-searchbar-input {
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                padding-left: .625rem;
                padding-top: 0.4em;
            }
            .shopee-searchbar-input__input {
                width: 698px;
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-flex: 1;
                -webkit-flex: 1;
                -moz-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                -webkit-box-align: center;
                -webkit-align-items: center;
                -moz-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                outline: none;
                border: none;
                padding: 0;
                margin: 0;
            }

            .header-with-search-wrapper .shopee-searchbar>.btn-solid-primary {
                background: #fb5533;
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
            }

            
    `}</style>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchShopMain: (linkShop) => {
            console.log(linkShop)
            dispatch({type:GET_MAIN_INFO_SHOP, payload: linkShop})
        }
    }
}

export default connect(null, mapDispatchToProps)(FormInput)