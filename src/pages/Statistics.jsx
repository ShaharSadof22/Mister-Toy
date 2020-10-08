import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Pie, Polar  } from 'react-chartjs-2';
 
import { loadData } from '../store/actions/toyAction'

export class _Statistics extends Component {
    componentDidMount() {
        this.props.loadData('PricePerType')
        this.props.loadData('ToyPerYear')
    }

    render() {
        const { dataPricePerType, dataToyPerYear } = this.props

        if (!dataPricePerType || !dataToyPerYear) return <div>Loading...</div>

        return (
            <div className="statistics-container">
                <h1 className="animate__animated animate__fadeIn">Statistics</h1>
                <NavLink to={`/toy`} className="animate__animated animate__fadeIn">
                    <Button variant="contained" className="material-btn">Back</Button>
                    {/* <Button variant="contained"  onClick={() => this.props.startEditToy(null)}>Add Toy</Button> */}

                </NavLink>
            <h3>Toy Per Year</h3>
                <Pie data={dataToyPerYear} />
            <h3>Price Per Type</h3>
                <Polar  data={dataPricePerType} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataPricePerType: state.toyReducer.dataPricePerType,
        dataToyPerYear: state.toyReducer.dataToyPerYear
    }
}
const mapDispatchToProps = {
    loadData,
}
export const Statistics = connect(mapStateToProps, mapDispatchToProps)(_Statistics)
