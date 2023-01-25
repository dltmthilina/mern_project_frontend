import React,{useRef, useState} from "react";

import Button from "./Button"

import "./ImageUpload.css";

const ImageUpload = (props) => {

    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();
    const ImageUpload=()=>{
        filePickerRef.current.click();
    }

    const pickedHandler=(e)=>{
       let pickedFile;
       let fileIsValid = isValid;
       if(e.target.files && e.target.files.length ===1){
        pickedFile = e.target.files[0];
        setFile(pickedFile);
        fileIsValid = true;

       }else{
        setIsValid(false)
        fileIsValid = false
       }
       props.onInput(props.id, pickedFile, fileIsValid)
    }

  return (
    <div className="form-control">
      <input
        id={prompt.id}
        ref={filePickerRef}
        type="file"
        style={{ display: "none" }}
        accept=".jpg, .png, .jpeg"
        onChange={pickedHandler}
      />
      <div>
        <div className={`image-upload ${props.center && "center"} `}>
            <div className="image-upload__preview">
                <img src="" alt="preview"/>
            </div>
            <Button type="button" onClick={ImageUpload}>Pick Image</Button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
