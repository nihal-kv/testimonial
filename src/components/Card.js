import './Card.css';

const Card=(props)=>{

    const name=props.data.name;
    const job=props.data.job;
    const text=props.data.text;
    const image=props.image;
    return (
        <div className="card">
            <div className='head'>
                <div><img src={image} alt='' className='img'></img></div>
                <div>
                    <h2>{name}</h2>
                    <h3>{job}</h3>
                </div>
            </div>
            <div className='grey'>
                <p>{text}</p>
            </div>
        </div>  
    );
}

export default Card;