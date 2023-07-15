"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // returns null unless mounted on client side to prevent 
    // server/ client desynchronization and hydration errors
    if (!isMounted) {
        return null;
    }

    return (
        <>
        <StoreModal />
        </>
    );
};