import style from './Card.module.css';

function Card({ id, title, description }) {
    return (
        <div className='container'>
            <ul className='d-flex justify-content-center align-items-center'>
                <li>
                    <div className="card p-0 m-3" key={id}>
                        <div className="card-header">
                            <h2>{title}</h2>
                        </div>
                        <div className="card-body">
                        <p>{description}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Card;