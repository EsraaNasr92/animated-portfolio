import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* sidebar */}
            <Sidebar />
            <div className='wrapper'>
                <motion.span
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >Logo here</motion.span>
                <div className='social'>
                    <a href='#'><img src='/facebook.png' alt='facebook icon' /></a>
                    <a href='#'><img src='/instagram.png' alt='instagram icon' /></a>
                    <a href='#'><img src='/youtube.png' alt='youtube icon' /></a>
                    <a href='#'><img src='/dribbble.png' alt='dribbble icon' /></a>
                </div>
            </div>
        </div>
    );

}

export default Navbar;