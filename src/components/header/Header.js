import LoginButton from "../Login/Login"
import "./Header.css"

const Header = () => {
    return (
        <div>
            <span onClick={() => window.scroll(0, 0)} className='header'>Header<LoginButton></LoginButton></span>

        </div>
    )
}

export default Header