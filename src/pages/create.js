import { useEffect, useState } from "react"

export default function Create(){
    const [steps, setSteps] = useState(null);

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [addOn, setAddOn] = useState('')
    const [image, setImage] = useState()

    // const onImageChange = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //       setImage(URL.createObjectURL(event.target.files[0]));
    //     }
    //    }

    useEffect(()=>{
        fetch('http://localhost:8000/steps')
        .then(res=> {
            return res.json();
        })
        .then(data =>{
            setSteps(data)
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        const step = {title, description, addOn, image}
        
        fetch('http://localhost:8000/steps',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(step)
        }).then(()=>{
            console.log("new blog added")
        })
    }
    function refreshPage() {
        window.location.reload(false);
      }

    return(
        <div className="create">
            <h2>Create a New Schedule</h2>
            <form onSubmit={handleSubmit}>
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
            <label>Picture URL</label>
            <input 
            type="text"
            required
            value = {image}
            onChange = {(event)=> setImage(event.target.value)} />
            <button onClick={refreshPage}>Add Step</button>
            </form>
            <h2>Schedule Preview</h2>
            <div className = "stepsPreview">
                {steps && steps.map((step)=>(
                    <div className="schedule-preview" key ={step.id}>
                         <img alt="preview image" src={step.image}/>
                        <h2>{step.title}</h2>
                        <p>{step.description}</p>
                        <p>{step.addOn}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
