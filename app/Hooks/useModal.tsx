
"use client"
import React, { useState } from 'react'

//typedefine
type UseModal = {
    isOpen: boolean;
    content: React.ReactNode | null;
    openModal: (modalContent: React.ReactNode) => void;
    closeModal: () => void;
};


const useModal = (): UseModal => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [content, setContent] = useState<React.ReactNode | null>(null);

    const openModal = (modalContent: React.ReactNode) => {
        setContent(modalContent);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setContent(null);
    };

    return {
        isOpen,
        content,
        openModal,
        closeModal
    };
};

export default useModal;