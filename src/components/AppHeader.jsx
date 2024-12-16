import style from './AppHeader.module.css';

function AppHeader() {
    return (
        <div className={`${style.header} py-3 mb-5`}>
            <h1 className='mx-3'>Learn Web Development</h1>
        </div>
    )
}

export default AppHeader;