import React, { useEffect, useState } from 'react'

const NewsBoard = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json())
        .then(data=>setArticles(data.articles));
    },[])
  return (
    <div>
        <h2 className='text-center'>Latest<span className='badge bg-danger'>News</span></h2>

    </div>
  )
}

export default NewsBoard