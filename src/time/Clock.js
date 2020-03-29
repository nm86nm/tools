import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Clock extends Component{
        
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    // componentWillUnmount(){
    //     clearInterval(this.timerID);
    // }

    tick(){
        this.setState({
            date: new Date()
        });
    }
    
    render(){
        return(
            <div>                
                {new Date().toLocaleTimeString()}
            </div>
        );
    }
    
}

export default Clock;