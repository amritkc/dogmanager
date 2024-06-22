import React, { useState } from 'react'

interface addDogsProps{
    addDog:(name:string,age:number) => void
}


function DogForm({addDog}:addDogsProps) {
    const[name, setname] = useState('');
    const[age, setAge] = useState('');

    function handelSubmit(e:React.FormEvent){
        e.preventDefault()
        if(name && age){
            addDog(name,parseInt(age))
            setAge('')
            setname('')
        }
    }
  return (
   <form onSubmit={handelSubmit}>
    <input
    type='text'
    data-testid="dogsname"
    value={name}
    placeholder="Dog's Name"
    onChange={(e)=>{
        setname(e.target.value)
    }}
    />
    <input
    data-testid="dogsage"
    onChange={(e)=>{
        setAge(e.target.value)
    }}
    type='number' value={age} placeholder="Dog's Age"/>
    <button  data-testid="submitdogslist" type='submit'>Submit</button>
   </form>
  )
}

export default DogForm