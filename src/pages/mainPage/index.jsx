import React, { useState } from 'react';
import { Featured } from '../../components/FeaturedRepo';
import { Gitpage } from '../../components/GitPage';
import './style.css';

export const Mainpage = () => {
    const [ featuredName, setFeaturedName] = useState()
    return(
        <div id="gitdiv">
            <Gitpage handleSelect={setFeaturedName}/>  
        
            <Featured repoName={featuredName}/>
        </div>
    )
}