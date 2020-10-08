import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { loadToy, removeToy, startEditToy } from '../store/actions/toyAction'
import { ToyList } from '../cmps/ToyList'

export class _ToyApp extends Component {

    componentDidMount() {
        this.props.loadToy()
    }

    render() {
        const { toys } = this.props
        return (
            <div className="toy-page">
                <header>
                    <h2 className="page-header animate__animated animate__fadeIn">Toy Application</h2>
                </header>
                <NavLink to={`/toy/edit`}>
                    <Button variant="contained" className="material-btn" onClick={() => this.props.startEditToy(null)}>Add Toy</Button>
                </NavLink>
                <NavLink to={`/toy/statistics`}>
                    <Button variant="contained" className="material-btn">Statistics</Button>
                </NavLink>
                <ToyList toys={toys} onRemove={this.props.removeToy} onEdit={this.props.startEditToy}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toys: state.toyReducer.toys
    }
}
const mapDispatchToProps = {
    loadToy,
    removeToy,
    startEditToy
}

export const ToyApp = connect(mapStateToProps, mapDispatchToProps)(_ToyApp)

