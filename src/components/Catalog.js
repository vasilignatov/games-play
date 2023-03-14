import React, { Suspense, useEffect, useState } from 'react';

// import CatalogGameCard from './CatalogGamesCard.js';f
import * as gameService from '../services/gameService.js';
const GameCard = React.lazy(() => import('./CatalogGamesCard'));

const Catalog = () => {

    const [games, setGames] = useState([]);
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        setTimeout(() => {
            gameService.getAll()
                .then(setGames);
            // setLoading(false);
        }, 1000);
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            <Suspense fallback={<h2 style={{ backgroundColor: 'white', color: 'black' }}>Loading...</h2>}>
                {games.length > 0
                    ? games.map(g => <GameCard key={g._id} game={g} />)
                    : <h3 className="no-articles">No games yet</h3>
                }

                {/* {
                    loading
                        ? <h2 style={{ color: 'white', textAlign: 'center' }}>Loading...</h2>
                        : games.length > 0
                            ? games.map(g => <CatalogGameCard key={g._id} game={g} navigationChangeHandler={navigationChangeHandler}1 />)
                            f: <h3 className="no-articles">No games yet</h3>
                } */}

            </Suspense>
        </section>
    );
}

export default Catalog;