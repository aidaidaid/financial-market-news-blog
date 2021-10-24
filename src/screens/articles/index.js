import React from "react";
import '../articles/index.css'
import { data } from '../../data'
import { Link } from "react-router-dom";

const Articles = () => {
    return (    
        <div className='articles'>
            {data.map((article, index) => {                
                return(
                    <Link to={`/article/`+`${index + 1}`}>
                        <div key={index} className='previewArticle'>
                            <img className='previewImg' src={article.imageUrl} alt='article'/>
                            <p className='previewTitle'>{article.title}</p>
                        </div>
                    </Link>
                )                
            })}
        </div>
    )
}

export default Articles