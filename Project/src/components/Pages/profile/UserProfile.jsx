import React, { useContext, useEffect, useState } from 'react'
import { Users } from '../../../App'

function UserProfile() {

    const { sampleData } = useContext(Users);
    const pofileData = sampleData?.filter((val) => val.email === localStorage.getItem("email"));

    const [showProfileData, setShowPofielData] = useState([])

    useEffect(() => {
        setShowPofielData(pofileData)
    }, [])

    // console.log(showProfileData);
    return (
        <div>
            <div className="container d-flex justify-content-center mt-5">
                <div className='col-lg-6 mt-4'>
                    <div className="card">
                        <h4 className='text-center mt-3'>Your Account Details</h4>
                        <div className="card-body mb-3">

                            {showProfileData?.map((val) => (
                                <div key={val.email}>
                                    <div className="profile-image text-center">
                                        <img src={val.file} alt="Profile" width={100} height={100} style={{ borderRadius: "50%", }} />
                                    </div>

                                    <div className="profile-details mt-5 ms-5 ">

                                        <div className='row'>
                                            <div className='col-md-6'><strong>Name:-</strong> {val.fname}</div>
                                            <div className='col-md-6'><strong>Email:-</strong> {val.email}</div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-6'><strong>Gender:-</strong> {val.gender}</div>
                                            {val.dob && <div className='col-md-6'><strong>Date of Birth:-</strong> {val.dob}</div>}
                                        </div>

                                        <div className='row'>
                                            {val.mob && <div className='col-md-6'><strong>Mobile:-</strong> {val.mob}</div>}
                                            {val.country && <div className='col-md-6'><strong>Country:-</strong> {val.country}</div>}
                                        </div>

                                        {val.interests && val.interests.length > 0 && (
                                            <div><strong>Interests:-</strong> {val.interests.join(', ')}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
