import { Link, useLocation, } from "react-router-dom";

import logo from '../../img/logo.png';
import './styles.scss';

export function Header() {

    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <>
            <a id="top"></a>
            <header>
                <div className="logo">
                    {pathname === "/" ?
                        <a href="#top">
                            <img src={logo} alt="GamerPower" />
                        </a>

                        :
                        <Link to="/">
                            <img src={logo} alt="GamerPower" />
                        </Link>
                    }
                </div>
            </header>
        </>
    )

}