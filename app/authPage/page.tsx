"use client"
import React, { useState } from 'react'
import AuthModal from './authModal'
import LoginFrom from './LoginFrom'
import RegisterForm from './Register'
import useModal from '@/app/Hooks/useModal'
import Navbar from '../Components/Navbar'

const page: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    // const openModal = () => setIsModalOpen(true);
    const openModal = () => {
        console.log('openModal called');
        setIsModalOpen(true);
    };
    const closeModal = () => setIsModalOpen(false);
    // const { isOpen, openModal, closeModal,content } = useModal();
    return (
        <div>
            {/* <Navbar/> */}
            {/* <button className='btn-btn-primary' onClick={()=>openModal(<LoginFrom/>)}></button> */}
            {/* <button className="btn btn-secondary" onClick={() => openModal(<RegisterForm />)}>
                Register
            </button> */}
            <Navbar onLoginClick={openModal} />
            <AuthModal
                isOpen={isModalOpen}
                content={<LoginFrom />}
                closeModal={closeModal}
            />

        </div>
    )
}

export default page