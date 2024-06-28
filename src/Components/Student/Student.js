import React, { useState } from 'react'
import './Student.css'
export default function Student() {

    const [student,setStudent]=useState({
        name:'Jack' ,
        surname:'Hilbert',
        birthdate:new Date("1990-06-22"),
        score:95,
        image:'https://cdn.pixabay.com/photo/2018/08/04/10/23/man-3583424_1280.jpg'
    });


    function handleNameChange(e){
      setStudent({
        ...student,
        name:e.target.value
      });
    }


    function handleSurnameChange(e){
      setStudent({
        ...student,
        surname:e.target.value
      });
    }

    function handleBirthdateChange(e){
      setStudent({
        ...student,
        birthdate:new Date(e.target.value)
      });
    }

    function handleScoreChange(e){
      setStudent({
        ...student,
        score:e.target.value
      });
    }

    function handleImageChange(e){
      setStudent({
        ...student,
        image:e.target.value
      });
    }

  return (
    <section className='base-section'>
        <section className='writing-side'>
          <label>
            Name : <input value={student.name} placeholder='Enter name' 
            onChange={handleNameChange}></input>
          </label>

          <label>
            Surname : <input value={student.surname} placeholder='Enter surname' 
            onChange={handleSurnameChange}></input>
          </label>
{/* 
          <label>
            Birthdate : <input value={`${student.birthdate.getFullYear()}.${student.birthdate.getMonth()}.
                                      ${student.birthdate.getDate()}`} 
            placeholder='Enter birthdate (yy.mm.dd)' 
            onChange={handleBirthdateChange}></input>
          </label> */}
          
          <label>
            Birthdate : <input value={student.birthdate.toLocaleDateString()} 
            placeholder='Enter birthdate (yy.mm.dd)' 
            onChange={handleBirthdateChange}></input>
          </label>

          <label>
            Score : <input value={student.score} placeholder='Enter score' 
            onChange={handleScoreChange}></input>
          </label>

          <div>
            ImageLink : <input value={student.image} placeholder='Enter image link' 
            onChange={handleImageChange}></input>
            <img src={student.image} alt='student-image'></img>
          </div>
        </section>

        <section className='showing-side'>
          <div>
            <label>{student.name}</label>
          </div>
          <div>
            <label>{student.surname}</label>
          </div>
          <div>
            {/* <label>{`${student.birthdate.getFullYear()}.${student.birthdate.getMonth()}.
                                      ${student.birthdate.getDate()}`}</label> */}
            <label>{student.birthdate.toLocaleDateString()}</label>
          </div>
          <div>
            <label>{student.score}</label>
          </div>
          <div>
            <img src={student.image} alt='student-image'></img>
          </div>
            
        </section>
    </section>
  )
}
