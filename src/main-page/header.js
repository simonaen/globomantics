import React from 'react';

const Header = (props) => (
    <header className="row header">
        <div className="col-12 mt-5 subtitle">
            <h1 className='text-right font-weight-bolder'>{props.subtitle}</h1>
        </div>
    </header>
);

export default Header;