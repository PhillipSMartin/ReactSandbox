import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/about');
    }
    return (
        <div>
            <h1>This is the Home page</h1>
            <button onClick={handleClick} >Go to About page</button>
        </div>
        );
}

export default Home;