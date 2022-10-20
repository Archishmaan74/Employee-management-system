import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <div style={{ marginLeft: "300px"}}>
                <h1>Employee Management System</h1>
            </div>
            <div style={{ marginTop: '30px', marginBottom: '18px', marginLeft: '500px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
            </div>
        </header>
    )
}

export default Header