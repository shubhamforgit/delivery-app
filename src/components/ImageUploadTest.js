import axios from "axios";
import { useState } from "react"
import { Button, Form } from "react-bootstrap"

const ImageUploadTest = () => {

    const [formImage, setFormImage] = useState({
        selectedImage: null
    })

    function imageInputHandler(event) {
        setFormImage({ selectedImage: event.target.files[0] });
    }

    function onImageUpload() {
        const formData = new FormData();
        formData.append("itemImage", formImage.selectedImage);
        axios.post("https://food-app-timesinternet.herokuapp.com/api/staff/item/image", formData, { headers: { "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9PV05FUiIsInVzZXJFbWFpbCI6InJlc0BnbWFpbC5jb20iLCJyZXN0YXVyYW50SWQiOjQsImV4cCI6MTYyOTUzODA3OH0.-BmOJ_4hQZ41ZEx7iWnUENEGZpgKMcX1es5qwlwrDdw" } })
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    };

    return (
        <div>
            <h1>Hi</h1>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control onChange={imageInputHandler} type="file" accept="image/png, image/gif, image/jpeg" />
                <Button onClick={onImageUpload}>Upload</Button>
            </Form.Group>
        </div>
    )
}

export default ImageUploadTest