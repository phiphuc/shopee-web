import React,{ Component } from 'react'
import SubAcc from '../SubAcc/SubAcc'
// import Clock from 'react-clock';
class ListSubAcc extends Component{
    constructor(props){
        super(props);
    }

    state = {
        date: new Date(),
      }

      componentDidMount() {
        setInterval(
          () => this.setState({ date: new Date() }),
          1000
        );
      }

    render(){
        return(
            <div id="card" className="card" style={{ width: '100%' }}>
                <div className="card-header">
                    <h3 className="text-center">Tài khoản phụ</h3>
                </div>
                <div className="card-body">
                <ul>
                {this.props.info.map(data => (
                        <SubAcc name={data.data.name} />
                    ))} 
                    </ul>
                </div>

                <p>Current time:  </p>
        {/* <Clock
          value={this.state.date}
        /> */}
                
                <style jsx>{`
                .shopee-svg-icon {
                    display: inline-block;
                    width: 1em;
                    height: 1em;
                    fill: currentColor;
                    position: relative;
                }
                #card{
                    margin-top: 20px;
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

export default ListSubAcc