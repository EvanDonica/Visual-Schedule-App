export default function Create(){
    return(
        <div className="create">
            <h2>Create a New Schedule</h2>
            <form>
            <label>Step Title: </label>  
            <input 
              type="text"
              required
            />
            <label>Description: </label>  
            <textarea
                required
            ></textarea>
            <label>Add-On</label>
            <select>
                <option value = "none">none</option>
                <option value = "timer">timer</option>
                <option value = "tokens">tokens</option>
            </select>
            </form>
            <button>Add Step</button>
        </div>
    )
}
