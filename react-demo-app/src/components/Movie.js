import React from 'react'

export const Movie = (props) => {

    return (
        <div className='App'>
            <h1>Movie List</h1>
            <div>{props.title}</div>
            <div>{props.year}</div>
            <div>{props.rating}</div>
        </div>
    )
}
