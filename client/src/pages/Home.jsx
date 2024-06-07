import React from 'react'
import useAuth from '../hooks/useAuth'

export default function Home() {
    const { user } = useAuth();

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? 'Welcome to the application' : 'Please login first'}
                    </div>
                </div>
            </h2>
        </div>
    )
}
