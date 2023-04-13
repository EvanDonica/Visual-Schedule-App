import { useEffect, useState } from "react"

export default function Create(){
    const [steps, setSteps] = useState(null);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addOn, setAddOn] = useState('')
    const [image, setImage] = useState()

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
       }

    useEffect(()=>{
        fetch('http://localhost:8000/step')
        .then(res=> {
            return res.json();
        })
        .then(data =>{

        })
    }, []);

    return(
        <div className="create">
            <h2>Create a New Schedule</h2>
            <form>
            <label>Step Title: </label>  
            <input 
              type="text"
              required
              value = {title}
              onChange = {(event)=> setTitle(event.target.value)}
            />
            <label>Description: </label>  
            <textarea
                required
                value = {description}
                onChange = {(event)=> setDescription(event.target.value)}
            ></textarea>
            <label>Add-On</label>
            <select
            value = {addOn}
            onChange = {(event)=> setAddOn(event.target.value)}
            >
                <option value = "">none</option>
                <option value = "timer">timer</option>
                <option value = "tokens">tokens</option>
            </select>
            <input 
            type="file" 
            onChange={onImageChange} 
            className="filetype" />
            </form>
            <button>Add Step</button>
            <p>{title}</p>
            <p>{description}</p>
            <p>{addOn}</p>
            <img alt="preview image" src={image}/>
        </div>
    )
}
