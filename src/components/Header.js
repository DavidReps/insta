import React from 'react';
import publicUrl from 'utils/publicUrl';
import css from './Header.module.css';

// import logo from './public/assets/logo.png';


function Header() {
    return (
        <nav className={css.head}>
            <div className={css.headItem}>
                <button>
                    <img src={publicUrl('/assets/camera.svg')} alt="Camera"/>

                </button>
            </div>
            <div className={css.headItem}>
                <button>
                    <img src={publicUrl('/assets/logo.png')} alt="Home"/>

                </button>
            </div>
            <div className={css.headItem}>
                <button>
                    <img src={publicUrl('/assets/message.svg')} alt="Messages"/>
                </button>
            </div>
        </nav>
    );
 }
export default Header;


