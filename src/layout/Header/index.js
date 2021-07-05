import React from 'react';

function Header({ headerClass, titles }) {
    return (
        <header className={headerClass}>
            {titles.map((el, index) => {
                return <span key={index}>{el}</span>
            })}
            <div className="header-btn">
                <span className="fas fa-cloud-download-alt"></span>
                <span className="fas fa-trash"></span>
            </div>
        </header>
    )
}

export default Header;