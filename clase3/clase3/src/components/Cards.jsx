function Cards ({title, arroba, img}) {

    

    return (
        
       <div>
        <img src={img}/>
        <h3>{title}</h3>
        <p>{arroba}</p>
       </div>
        

    )
}

export default Cards