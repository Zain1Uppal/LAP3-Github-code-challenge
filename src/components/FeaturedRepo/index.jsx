import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

export const Featured = ( {repoName} ) => {
    const [featured, setFeatured] = useState();
    const [repoData, setRepoData] = useState([]);
    const userName = useSelector(state => state.username)

    useEffect(() => { 
        const fetchRepo = async () => {
            const my_token = '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'
            try {
                let { data } = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`)
                console.log(data)
                setRepoData(data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchRepo()
    }, [repoName])

    
    const handleSubmit = e => {
        e.preventDefault();
        setFeatured(e.target.reponame.value)
    }

    return (
        <>
        <div id="infodiv">

        <h1>{repoData.name}</h1>
        <p>{repoData.description}</p>
       {repoData.name ? <><a target="_blank" href={repoData.clone_url}>Open this repo in github</a>        <p>Created: {repoData.created_at}</p>
</> : <h1></h1>} 
        </div>
        </>
    )
}