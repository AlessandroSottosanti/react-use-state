import style from './Buttons.module.css';

function Buttons({id, title, onClick, btnColor}) {
return (
    <button onClick={() => onClick()} className={`btn ${btnColor}  me-3`} key={id}>{title}</button>
)
}

export default Buttons;