const LatestGamesCard = ({
    game,
    navigationChangeHandler
}) => {

    const onDetailsClick = (e) => {
        e.preventDefault();
        navigationChangeHandler('/details/' + game._id);
    }
    
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={game.imageUrl} />
            </div>
            <h3>{game.title}</h3>
            <div className="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
                <a
                    href={game._id}
                    className="btn details-btn"
                    onClick={onDetailsClick}
                >
                    Details
                </a>
            </div>
        </div>
    )
}

export default LatestGamesCard;