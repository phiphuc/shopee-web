import React, { Component} from'react';

class SubAcc extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
             <li> {this.props.name}</li>
             
            </>
        )
    }
}

export default SubAcc