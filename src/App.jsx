//                  COMPILING ALL COMPONENTS IN THIS COMPONENT                  \\
/*
         
*/


// Importing Requried Modules :
import React, { useState } from 'react';

// Importing Components ;
import Nav from './Navbar'
import Foot from './Footer'
import Taker from './NoteTaker'
import Keep from './Keeper'

// Imorting CSS :
import './index.css'



// Creating the App Component :
const App = () => {

    const [keepNote, updateKeepNote] = useState([])

    const saveNote = (note) => {
        updateKeepNote((preVal) => {
            return (
                [...preVal, note]
            )
        })
    }

    const onDelete = (id) => {
        updateKeepNote((preVal) =>
            preVal.filter((currVal, ind) => {
                return ind !== id
            })
        )
    }


    // Rendring :
    return (
        <>
            <Nav />
            <Taker
                takeNote={saveNote}
            />
            <div id="keeperDiv">
                {
                    keepNote.map((val, ind) => {
                        return (
                            <>
                                <Keep
                                    key={ind}
                                    id={ind}
                                    title={val.title}
                                    content={val.content}
                                    delete={onDelete}

                                />
                            </>
                        )
                    })
                }
            </div>
            <Foot />
        </>

    )
};

// Exporting App Component :
export default App;