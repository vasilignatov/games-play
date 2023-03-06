import { useEffect, useState } from 'react';
import CatalogGameCard from './CatalogGamesCard.js';
import * as gameService from '../services/gameService.js';

const Catalog = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            gameService.getAll()
                .then(setGames);
            setLoading(false);
        }, 2000);
    }, []);


    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {
                loading
                    ? <h2 style={{ color: 'white', textAlign: 'center' }}>Loading...</h2>
                    : games.length > 0
                        ? games.map(g => <CatalogGameCard key={g._id} game={g} />)
                        : <h3 className="no-articles">No games yet</h3>
            }

        </section>
    )
}

export default Catalog;