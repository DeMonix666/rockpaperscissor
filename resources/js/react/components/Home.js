import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Response from './Response';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            res: null
        }
    }

    fire(choice){
        this.setState({
            res: null
        });

        axios.post('/api/process', {
                choice : choice
            })
            .then(res => {
                this.setState({
                    res: res.data
                });
            }).catch(err => {
                console.log(err);
        });
    }

    render() {
        let content;

        content = (
            <div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <button onClick= {()=> this.fire('rock')}><img src="/images/rock.png" /></button>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <button onClick= {()=> this.fire('paper')}><img src="/images/paper.png" /></button>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center">
                        <button onClick= {()=> this.fire('scissor')}><img src="/images/scissor.png" /></button>
                    </div>
                </div>

                <Response res={this.state.res} />
            </div>
        )

        return (
            <div className="content-wrapper">
                <h1>React JS</h1>

                {content}
            </div>
        );
    }
}

(() => {
    let element = document.getElementById('content');

    if (element) {
        ReactDOM.render(<Home />, element);
    }
})()