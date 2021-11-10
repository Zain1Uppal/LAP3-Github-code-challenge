import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../../actions';
import './style.css';

export const Gitpage = ({ handleSelect }) => {
    const [ userName, setUsername ] = useState('')
    const [userData, setUserData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const getUserDetails = async () => {
            const my_token = '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'
            try {
                const { data } = await axios.get(`https://api.github.com/users/${userName}/repos`)
                console.log(data)
                setUserData(data)
            } catch(err) {
                console.log(err)
            }
        }
        getUserDetails()
    }, [userName])

    const handleSubmit = e => {
        e.preventDefault();
        setUsername(e.target.username.value)
        dispatch(updateUsername(e.target.username.value))
    }
    console.log(userData)
    return (
        <>
        <form role='userInput' onSubmit={handleSubmit}>
            <label htmlFor='username' >Input your github username</label>
            <input type='text' id='username'></input>
            <input id="submitbutton" type='submit'></input>
        </form>
        <div id="repodiv">
            {userName ? <h3 id="selector">please select a repo</h3> : <h1>Please enter a username</h1> }
            <ul>
                {
                    userData.map(dt => (
                        <li key={dt.id} onClick={() => handleSelect(dt.name)}>
                            <strong role='repoName' aria-label='repoNam' >{dt.name}</strong>    
                        </li>
                    ))
                }
            </ul>
        </div>
        </>
    )
}