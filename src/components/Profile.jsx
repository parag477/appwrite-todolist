import React, { useState } from 'react'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate, Link } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState()

    useEffect(() => {
        const getData = account.get()
    }, [])

    return (
        <div>
        
        </div>
    )
    }

export default Profile
