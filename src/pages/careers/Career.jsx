import { useLoaderData,Link } from "react-router-dom"
import { getAllCareers } from "../../services/careers.api"

export default function Career() {
    const careers = useLoaderData()
  return (
    <div className='careers'>
     
      {careers.map(career => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}
// loader function
export const careersLoader =async () => {
  const res = await getAllCareers()


  return res.data
}