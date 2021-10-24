import React from "react";
import '../article/index.css'
import {data} from '../../data'

const Article = ({ match }) => {
    let id = match.params.id - 1;
    return (    
        <div className='article'>
            <p className='title'>{data[id].title}</p>
            <div className='image_box'>
                <img className='image' src={data[id].imageUrl} alt='article'/>
            </div>
            <p className='description'>{data[id].description}</p>
            <p className='comment'><p className='expert'>Experts comment</p>{data[id].expertComment}</p>
        </div>
    )
}

export default Article