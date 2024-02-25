import "./DarkMode.css";
import Moon from "./Moon";
import Sun from "./Sun";

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    }
    return (
        <div  className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onClick={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
                <Sun></Sun>
                <Moon></Moon>
            </label>
        </div>
    );
};

export default DarkMode;
