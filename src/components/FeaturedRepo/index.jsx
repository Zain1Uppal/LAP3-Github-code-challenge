import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

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

        <h1>{repoData.full_name}</h1>
        </>
    )
}