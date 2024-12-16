import style from './Buttons.module.css';

function Buttons({id, title}) {
return (
    <button className='btn btn-primary me-3' key={id}>{title}</button>
)
}

export default Buttons;