import React from 'react';
import { storage } from '@/lib/config/firebase-client';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";

// This custom hook manages file uploading and removal operations
export const useFileUploader = () => {
    // State to track if an upload or delete operation is in progress
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    // Function to upload an image file to Firebase Storage
    const uploadImage = async (file: File, refId: string, reference: string) => {
        setIsLoading(true);
        // Remove any spaces from the refId to ensure a valid storage path
        refId = refId.replace(/\s/g, "");
        // Create a reference to the file's location in Firebase Storage
        const storageRef = ref(storage, `${reference}/${refId}`);
        // Upload the file and wait for it to complete
        const uploadTask = await uploadBytesResumable(storageRef, file);
        setIsLoading(false);
        // Return the download URL of the uploaded file
        return await getDownloadURL(uploadTask.ref);
    }

    // Function to remove an image from Firebase Storage
    const removeImage = async (referenceUrl: string) => {
        try {
            setIsLoading(true);
            // Decode the URL to handle any encoded characters
            const decodedUrl = decodeURIComponent(referenceUrl);
            // Extract the file path from the decoded URL
            const pathStartIndex = decodedUrl.indexOf("/o/") + 3;
            const pathEndIndex = decodedUrl.indexOf("?alt=media");
            const path = decodedUrl.slice(pathStartIndex, pathEndIndex);

            // Create a reference to the file in Firebase Storage
            const fileRef = ref(storage, path);

            // Delete the file from Firebase Storage
            await deleteObject(fileRef);
            setIsLoading(false);
        } catch (error: any) {
            setIsLoading(false);
            // If an error occurs during deletion, throw it for the caller to handle
            throw new Error(error);
        }
    }

    // Return the functions and loading state for use in components
    return { uploadImage, removeImage, isLoading }
}