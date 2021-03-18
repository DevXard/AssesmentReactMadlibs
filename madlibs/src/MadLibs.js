import {useState} from 'react';
import MadLibsForm from './MadLibsForm'
import MadLibsResponse from './MadLibResponce'

const createMadLibs = (str, obj) => {
    if(!obj) return

    let match = str.replace(/_[a-z0-9]{1,}_/gi, function(x){
      let newX = x.replace(/_/g,'')
      return obj[newX]
    })
    return match
}

const MadLibs = ({libs}) => {
    const [data, setData] = useState(null)
    const [formIsRedy, setFormIsRedy] = useState(false)

    const sentence = libs[Math.floor(Math.random() * (libs.length - 1))]
    
    const mLib = createMadLibs(sentence, data)
    console.log(mLib)
    const addData = (data) => {
        setData(data)
    }

    const handleFormIsRedy = () => {
        setFormIsRedy(data => !data)
    }
    const clearData = () => {
        setData(null)
    }

    return (
        <div>
            <h1>MadLibs</h1>
            {!formIsRedy ? 
            <MadLibsForm 
            handleFormIsRedy={handleFormIsRedy}
            addData={addData}/> 
            :
            <MadLibsResponse 
            handleFormIsRedy={handleFormIsRedy} 
            clearData={clearData}
            response={mLib}/>}
            
        </div>
    )
}

MadLibs.defaultProps ={
    libs: [
        "There was a _color_ _noun_ that loved _adjective_ _noun2_.",
        "There was oce a little _color_ _noun_ that was _adjective_ into the lake and saw _noun2_.",
        "High high in to the _color_ sky there was a _noun_ that was _adjective_ and fell in to a _noun2_."
    ]
} 

export default MadLibs;