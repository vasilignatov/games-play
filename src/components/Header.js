import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header onClick={onHeaderClick}>
            <h1><Link className="home" to="/home">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>

                <div id="user">
                    <Link to="/create">Create Game</Link>
                    <Link to="/logout">Logout</Link>
                </div>

                <div id="guest">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}