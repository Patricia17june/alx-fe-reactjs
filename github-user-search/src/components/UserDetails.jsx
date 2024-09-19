import react from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const UserName = useParams

    return(
        <div>
            <h1>UserDetail; for {UserName}</h1>
        </div>
    )
}

export default UserDetails;
