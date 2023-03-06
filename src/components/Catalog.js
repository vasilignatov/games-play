import { useEffect, useState } from 'react';
import CatalogGameCard from './CatalogGamesCard.js';

const Catalog = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/games?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(setGames);
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            { games.length > 0
                ? games.map(g => <CatalogGameCard key={g._id} game={g} />)
                : <h3 className="no-articles">No games yet</h3>
            }

        </section>
    )
}

export default Catalog;