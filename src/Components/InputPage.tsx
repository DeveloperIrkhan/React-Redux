import React, { ChangeEvent, useState } from 'react';

interface NoteToInput {
    addNote(note:string):void;
}
export const Inputpage:React.FC<NoteToInput> = ({addNote}) => {
    const [note , setnote]=useState("")
    const updateNote = (evnt:ChangeEvent<HTMLInputElement>) =>{
        setnote(evnt.target.value)
    }
    const onClickAdd = ()=>{
        addNote(note);
        setnote("")
    }
    return (
        <div className="">
            <div className="">
                <h2 className="text-danger">This is For React Redux in TypeScript</h2>
            </div>
            <div className="mt-5">
                <input 
                    type="text" 
                    placeholder="Enter something add to list...." 
                    className="form-control" 
                    value={note}
                    onChange={updateNote}
                    name="note"/>
            </div>
            <div className="col my-5">
                <button 
                    onClick={onClickAdd}
                    className="col-3 rounded-pill btn btn-outline-danger">Note!</button>
            </div>
        </div>
    )
}