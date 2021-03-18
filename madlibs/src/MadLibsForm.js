import {useState} from 'react';
import './MadLibsForm.css'
const MadLibsForm = ({addData, handleFormIsRedy}) => {
    const [formData, setFormData] = useState({
        noun: '',
        noun2: '',
        adjective: '',
        color: ''
    })

    const handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
         }))
    }

    const handleSubmit = e =>{
        e.preventDefault();
        addData(formData)
        handleFormIsRedy()
    }
    return (
        <div className="MadLibsForm-container">
            <form onSubmit={handleSubmit}>
                
                <input 
                id="noun"
                type="text"
                name="noun"
                placeholder="Noun"
                value={formData.noun}
                onChange={handleChange}
                />
                <input 
                id="noun2"
                type="text"
                name="noun2"
                placeholder="Noun2"
                value={formData.noun2}
                onChange={handleChange}
                />
                <input 
                id="adjective"
                type="text"
                name="adjective"
                placeholder="Adjective"
                value={formData.adjective}
                onChange={handleChange}
                />
                <input 
                id="color"
                type="text"
                name="color"
                placeholder="Color"
                value={formData.color}
                onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default MadLibsForm;