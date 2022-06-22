import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import './styles.scss'

export function Game() {
    const { id } = useParams();
    const [game, setGame] = useState([]);

    const params = useParams();
    console.log(params);

    useEffect(() => {
        async function getGame() {
            const response = await fetch(`/giveaway?id=${id}`);
            const data = await response.json();
            setGame(data);
        }
        getGame();
    }, [id])

    return (
        <div className="game-details">

            <div className="game-details-image">
                <img src={game?.image} alt={game?.title} />
            </div>

            <div className="game-details-info">

                <div className="game-details-info-game_title">
                    {game?.title}
                </div>

                <div className="game-details-info-row">
                    <div className="game-details-info-title">
                        Price
                    </div>

                    <div className="game-details-info-text">
                        {game?.worth}
                    </div>
                </div>

                <div className="game-details-info-row">
                    <div className="game-details-info-title">
                        Platforms
                    </div>

                    <div className="game-details-info-text">
                        {game?.platforms}
                    </div>
                </div>

                <div className="game-details-info-row">
                    <div className="game-details-info-title">
                        Status
                    </div>

                    <div className="game-details-info-text">
                        {game?.status}
                    </div>
                </div>

                <div className="game-details-info-row">
                    <div className="game-details-info-title">
                        End Date
                    </div>

                    <div className="game-details-info-text">
                        {game?.end_date}
                    </div>
                </div>

                <div className="game-details-info-row">
                    <div className="game-details-info-title">
                        Description
                    </div>

                    <div className="game-details-info-text">
                        {game?.description}
                    </div>
                </div>

                <div className="game-details-info-link">
                    <a href={game?.gamerpower_url} target="_blank" rel="noreferrer">
                        Giveaway
                    </a>
                </div>

            </div>

        </div>
    )

}