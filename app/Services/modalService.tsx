"use client"
import React, { useState } from 'react'

const modalService = () => {
    const [isopen, SetIsOpen] = useState(false)
    const [content, setContent] = useState(null)

    const openModal = (modalContent) => {
        setContent(modalContent);
        setIsOpen(true);
    }

const closeModal=()=>{
    SetIsOpen(false)
    setContent(null)
}
return {
    isOpen,
    content,
    openModal,
    closeModal
  };
}

export default modalService