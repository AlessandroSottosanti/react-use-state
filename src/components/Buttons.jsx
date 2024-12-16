import style from './Buttons.module.css';

function Buttons({id, title, onClick, btnColor}) {
return (
    <button onClick={() => onClick()} className={`btn btn-primary me-3 ${btnColor}`} key={id}>{title}</button>
)
}

export default Buttons;