import React from 'react'
import {ToyPreview} from './ToyPreview'

export function ToyList({ toys, onRemove, onEdit }) {
    return (
        <div className="main-container">
            {toys.map(toy => <ToyPreview toy={toy} key={toy._id} onRemove={onRemove} onEdit={onEdit}/>)}
        </div>
    )
}
