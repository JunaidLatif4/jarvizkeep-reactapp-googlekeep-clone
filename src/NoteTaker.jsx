// Importing Requried Modules :
import React from 'react';
import { useState } from 'react';

// Importing Material-UI Component : 
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const Taker = (props) => {
    const [note, updateNote] = useState({
        title: "",
        content: ""
    })

    const enteringNote = (data) => {
        const { name, value } = data.target;

        updateNote((preVal) => {
            return (
                {
                    ...preVal,
                    [name]: value
                }
            )
        })
    }

    const passNote = () => {
        props.takeNote(note)
        updateNote({
            title: "",
            content: ""
        })
    }


    const [showDiv, updateShowDiv] = useState(false);
    const show = () => {
        updateShowDiv(true)
    }
    const hide = () => {
        updateShowDiv(false)
    }


// Rendering :
    return (
        <>
            <div id="mainDiv" onDoubleClick={hide}>

                {
                    (showDiv) ? (
                        <input
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={note.title}
                            onChange={enteringNote}
                        />) : null
                }
                <textarea
                    column=""
                    rows=""
                    placeholder="Write a Note"
                    name="content"
                    value={note.content}
                    onChange={enteringNote}
                    onClick={show}
                />
                {
                    (showDiv) ? (
                        <Button id="btn" onClick={passNote}>
                            <AddIcon id="plus" />
                        </Button>) : null
                }
            </div>


        </>
    )
}

// // Exporting Taker Component :
export default Taker;