import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Response extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        let res = this.props.res;
        
        if (res === null){
            return (
                <div></div>
            );
        } else {
            return (
                <div className="wrapper text-center" style={{marginTop: "40px"}}>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                            YOU<br />
                            <img src={"/images/" + res.your_choice + ".png"} height="80" />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left">
                            COMPUTER<br />
                            <img src={"/images/" + res.computer_choice + "-r.png"} height="80" />
                        </div>
                    </div>
                    <div>Result : {res.result}</div>   
                    <div>Time : {res.time}</div>              
                </div>
            );
        }
    }
}