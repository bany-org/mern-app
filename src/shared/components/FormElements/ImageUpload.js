import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";

import "./ImageUpload.css";

const ImageUpload = (props) => {
    const [file, setFile] = useState();
    const [previerwUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);
    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
            return;
        }

        const fileReader = new FileReader();
        console.log("set file url", fileReader);
        fileReader.onload = () => {
            console.log("4", fileReader);

            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }, [file]);

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    const pickedHandler = (event) => {
        let pickedFile;
        let fileIsValid = isValid;

        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid = true;
        } else {
            setIsValid(false);
            fileIsValid = false;
        }

        props.onInput(props.id, pickedFile, fileIsValid);
    };

    return (
        <div className="form-control">
            <input
                type="file"
                id={props.id}
                ref={filePickerRef}
                style={{ display: "none" }}
                accept=".jpg, .png, .jpeg"
                onChange={pickedHandler}
            />
            <div className={`image-upload ${props.center && "center"}`}>
                <div className="image-upload__preview">
                    {previerwUrl && <img src={previerwUrl} alt="Preview" />}
                    {!previerwUrl && <p>Please pick an image</p>}
                </div>
                <Button type="button" onClick={pickImageHandler}>
                    PICK IMAGE
                </Button>
            </div>
            {!isValid && <p>errors</p>}
        </div>
    );
};

export default ImageUpload;
