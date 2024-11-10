import React from 'react'

const NewsItem = (props)=> {


  
    let { title, description, imageUrl, newsUrl, author, date ,source} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>

          
             <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:'1'}}>{source}</span>
          

          <img src={!imageUrl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unkwon" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
