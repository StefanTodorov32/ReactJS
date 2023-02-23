import React from 'react'
import "./Navbar.css"
export const Navbar = () => {
    return (
        <nav>
            <div class="logo">
                <a href="/">Movie App</a>
            </div>
            <div class="nav-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/movies">Movies</a></li>
                    <li><a href="/tvshows">TV Shows</a></li>
                    <li><a href="/search">Search</a></li>
                </ul>
                <div class="user-buttons">
                    <a href="/login" class="login-register">Login</a>
                    <a href="/register" class="login-register">Login</a>
                    <a href="/profile" class="profile">Profile</a>
                </div>
            </div>
        </nav>


    )
}
