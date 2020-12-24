//                  This is the Keeper Component of the App                 \\
// Importing Requried Module :
import React from 'react';

// Importing Material-UI Component : 
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const Keep = (props) => {
    
    const deleteing = () => {
        props.delete(props.id)
    }
    

// Rendering :
    return (
        <>
            <div id="noteDiv">
                <h3>{props.title}</h3>
                <br />
                <p id="note">
                    {props.content}
                </p>
                <Button id="delbtn" onClick={deleteing} >
                    <DeleteIcon id="del" />
                </Button>
            </div>
        </>
    )
}

// Exporting Keep Component :
export default Keep;