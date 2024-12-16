import style from './Buttons.module.css';

function Buttons({id, title}) {
return (
    <button className='btn btn-primary mx-2' key={id}>{title}</button>
)
}

export default Buttons;