import React from 'react'
import { DogListProps } from '../../utils/constant'

function DogList(props: DogListProps) {

    console.log("222", props.dogs)
    return (
        <div>
            <h2>Dog's List</h2>
            <ul>
                {props.dogs.map((dog, index) => (<li key={index}>{`${dog.name} is ${dog.age} years old`}</li>))}
            </ul>
            <p>Last List Updated time: {props.LastUpdate ? props.LastUpdate : 'never'}</p>
        </div>
    )
}

export default DogList