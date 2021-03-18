
const MadLibResponce = ({response, clearData, handleFormIsRedy}) => {

    const handleRestart = () => {
        clearData();
        handleFormIsRedy();
    }

    return (
        <>
            <h2>{response}</h2>
            <button onClick={handleRestart}>Restart</button>
        </>
    )
}

export default MadLibResponce;