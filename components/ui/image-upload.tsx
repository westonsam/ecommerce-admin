"use client";

import Image from "next/image";
import { ImagePlus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";

interface ImageUploadProps {
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    }

    if (!isMounted) {
        return null;
    }


    return (
        <div>
            <div
                className="
            flex
            items-center
            gap-4
            mb-4"
            >
                {value.map((url) => (
                    <div
                        key={url}
                        className="
                    relative 
                    w-[200px] 
                    h-[200px]
                    rounded-md
                    overflow-hidden"
                    >
                        <div
                            className="
                            absolute
                            z-10
                            top-2
                            right-2"
                        >
                            <Button
                                type="button"
                                onClick={() => onRemove(url)}
                                variant="destructive"
                                size="icon">
                                <Trash className="h-4 w-4" />
                            </Button>
                        </div>
                        {/* TODO: Change alt name to include name of billboard */}
                        <Image
                            fill
                            className="object-cover"
                            alt="Image"
                            src={url} />
                    </div>
                ))}
            </div>
            <CldUploadWidget
                onUpload={onUpload}
                uploadPreset="esacoiri">
                {({ open }) => {
                    const onClick = () => {
                        open();
                    }

                    return (
                        <Button
                            type="button"
                            disabled={disabled}
                            variant="secondary"
                            onClick={onClick}>
                            <ImagePlus className="h-4 w-4 mr-2" />
                            Upload image
                        </Button>
                    )
                }}
            </CldUploadWidget>
        </div>
    )
};

export default ImageUpload;