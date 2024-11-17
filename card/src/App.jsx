import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  const users = [
      {
        "name": "Alice Johnson",
        "city": "New York",
        "age": 29,
        "profession": "Software Engineer",
        "image": "https://tse2.mm.bing.net/th?id=OIP.f_A46fawTt0t_9dDGgZEkAHaHa&pid=Api&P=0&h=220"
      },
      {
        "name": "Rahul Verma",
        "city": "Mumbai",
        "age": 35,
        "profession": "Marketing Manager",
        "image": "https://tse3.mm.bing.net/th?id=OIP.fPIdmjxfmhJpB6akQZwBmwHaK_&pid=Api&P=0&h=220"
      },
      {
        "name": "Hiroshi Tanaka",
        "city": "Tokyo",
        "age": 42,
        "profession": "Data Scientist",
        "image": "https://easydrawingguides.com/wp-content/uploads/2022/09/Step-8_anime_cat_drawing_tutorials.png"
      },
      {
        "name": "Maria Gonzalez",
        "city": "Barcelona",
        "age": 31,
        "profession": "Graphic Designer",
        "image": "https://tse2.mm.bing.net/th?id=OIP.oDGkiJU01nfb-5RQS7RzswHaHa&pid=Api&P=0&h=220"
      },
      {
        "name": "Liam Smith",
        "city": "London",
        "age": 27,
        "profession": "Content Writer",
        "image": "https://wallpapercave.com/wp/wp9329011.jpg"
      },
      {
        "name": "Chen Wei",
        "city": "Beijing",
        "age": 38,
        "profession": "Civil Engineer",
        "image": "https://i.pinimg.com/originals/e1/2e/30/e12e304910790945b83672758c9bcf9f.jpg"
      },
      {
        "name": "Amara Njeri",
        "city": "Nairobi",
        "age": 24,
        "profession": "Teacher",
        "image": "https://wallpapercave.com/wp/wp9569273.jpg"
      },
      {
        "name": "Emily Brown",
        "city": "Sydney",
        "age": 30,
        "profession": "Architect",
        "image": "https://i.pinimg.com/736x/2f/98/45/2f98459f5635d4765ad05a5a176ad8a0.jpg"
      },
      {
        "name": "Olga Ivanova",
        "city": "Moscow",
        "age": 45,
        "profession": "Journalist",
        "image": "https://tse1.mm.bing.net/th?id=OIP.r1A89Ge_hJmTYGEm3unJjAHaHa&pid=Api&P=0&h=220"
      }
  ]
    

  return (
    <>
      <div>
        {users.map(function(elem, idx){
          return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} profile_photo={elem.image} />
        })}
       </div> 
    </>
  )
}

export default App
