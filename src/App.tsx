
import { gql } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"
import { useQuery } from "@apollo/client"

const GET_LESSONS_QUERRY = gql`
  query {
      lessons {
        id
        title
      }
    }
`
interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERRY)

  //data?.lessons, percorrer lesson (map) e a cada lesson retornar ...
  // ? so procurar pelas lessons caso o data n seja vazio
  return (
   <ul> 
    {data?.lessons.map(lesson => {
      return <li key={lesson.id}>{lesson.title}</li>
    })}
   </ul>
  )
}

export default App
