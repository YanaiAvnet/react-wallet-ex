import React, { Component } from 'react';

export default ({ name, coins, moves }) => {
    return (
        <section className="user-details">
            <h1>User Details</h1>
            <ul>
                <li>Name: {name}</li>
                <li>Coins: {coins}</li>
                <li>Moves: {moves.length ? moves : 'none'}</li>
            </ul>
        </section>
    )
}
