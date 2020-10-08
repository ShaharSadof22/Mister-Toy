import React from 'react'
import { NavLink } from 'react-router-dom';

export function ToyPreview({ toy, onRemove, onEdit }) {
    return (
        <div className="toy-preview animate__animated animate__bounceInLeft">
            <p>Name: {toy.name}</p>
            <div className="flex">
                <p>Price: {toy.price}</p>
                <p className="toy-details">In stoke: {toy.inStock ? "Yes" : "No"}</p>
            </div>
            <div>
                <NavLink to={`/toy/details/${toy._id}`} className="details-link toy-btn">Details</NavLink>
                <NavLink to={`/toy/edit/${toy._id}`} className="details-link toy-btn" onClick={() => onEdit(toy._id)}>Edit</NavLink>
                <button className="toy-btn" onClick={() => onRemove(toy._id)}>Delete</button>
            </div>
        </div>
    )
}
