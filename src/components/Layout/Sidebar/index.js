import './index.scss';
import {Link} from 'react-router-dom';
import LogoA from '../../assets/images/logo-a.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = "/">
            <img src = {LogoA} alt="logo"/>
            <img src = {LogoSubtitle} alt="alfonso"/>
        </Link>
    </div>
)

export default Sidebar