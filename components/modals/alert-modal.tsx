"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <Modal
            title="Are you sure?"
            description="This action cannot be undone"
            isOpen={isOpen}
            onClose={onClose}>
            <div
                className="
            flex
            items-center
            justify-end
            w-full
            space-x-6
            pt-6
            "
            >
                <Button
                    disabled={loading}
                    variant="outline"
                    onClick={onClose}
                >
                    Cancel
                </Button>
                {/* TODO: Add confirm by typing store name */}
                <Button
                    disabled={loading}
                    variant="destructive"
                    onClick={onConfirm}>
                    Continue
                </Button>
            </div>
        </Modal>
    )
}