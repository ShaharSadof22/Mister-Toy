import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { toyService } from '../services/toyService'
import socketService from '../services/socketService'
const io = require('socket.io-client');



export class _ToyDetails extends Component {
    state = {
        toy: null,
        msg:'',
        msgs: []
    }
    
    async componentDidMount() {
        const { toyId } = this.props.match.params
        const toy = await toyService.getById(toyId)
        this.setState({ toy })

        // var socket = io('//localhost:3002');
        socketService.setup();
        socketService.emit('toy id', toyId);

        socketService.on('chat history', msgs=>{
            console.log('History: ', msgs);
            this.setState({msgs})
        })

        socketService.on('chat receiveMsg', msg=>{
            console.log('FRONTEND Got msg:', msg);
            this.setState({msgs: [...this.state.msgs, msg]})
        })
    }

    componentWillUnmount(){
        socketService.terminate()
    }

    onSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state.msg);

        // var socket = io('//localhost:3002');
        const msg = {
            from: this.props.currUser.name,
            msg: this.state.msg
        }
        socketService.emit('chat sendMsg', msg);
        this.setState({msg: ''})
    }

    handleValueChange = (ev) => {
        const msg = ev.target.value;
        this.setState({msg})
    }

    render() {
        const { toy } = this.state;
        if (!toy) return <div>Loading...</div>
        return (
            <div className="toy-details">

                <form onSubmit={this.onSubmit}>
                    <input id="m" autoComplete="off" value={this.state.msg} onChange={this.handleValueChange}/><button>Send</button>
                </form>
                <ul id="messages">{this.state.msgs.map((msg, index) => <li key={index}>{msg.from}: {msg.msg}</li>)}</ul>

                <p>Id: {toy._id}</p>
                <p>Name: {toy.name}</p>
                <p>Type: {toy.type}</p>
                <p>Price: {toy.price}</p>
                <p>Created At: {toy.createdAt}</p>
                <p>In stoke: {toy.inStock ? "Yes" : "No"}</p>
                <img src={toy.imgURL} />
                <NavLink to={`/toy`}>Back</NavLink>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        currUser: state.userReducer.currUser
    }
}
export const ToyDetails = connect(mapStateToProps)(_ToyDetails)

