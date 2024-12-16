import style from './Card.module.css';

function Card({ id, title, description }) {
    return (
        <div className='container'>

                    <div className="card p-0 m-3" key={id}>
                        <div className="card-header bg-warning">
                            <h2>{title}</h2>
                        </div>
                        <div className="card-body">
                        <p>{description}</p>
                        </div>
                    </div>
        </div>
    )
}

export default Card;