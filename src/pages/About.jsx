import React from 'react'
import { GoogleMap } from '../cmps/GoogleMap'


export function About() {
    return (
        <div className="about-page">
            <section className="main-container">
                <h1 className="page-header animate__animated animate__fadeIn">Welcome to Toysi - Our stores</h1>
                <GoogleMap />
            </section>
        </div>
    )
}
