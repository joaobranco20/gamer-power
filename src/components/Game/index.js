import { Link } from 'react-router-dom';

import './styles.scss';

export function Game({ id, title, worth, platforms, status, type, image }) {

    return (

        <article className="game">

            <Link to={`game/${id}`}>
                <div className="game-content">
                    <div className="game-image">
                        <img src={image} alt={title} />
                    </div>

                    <div className="game-title">
                        {title}
                    </div>

                    <div className="game-info">

                        <div className="game-info-row">
                            <div className="game-info-title">
                                Price
                            </div>

                            <div className="game-info-text">
                                {worth}
                            </div>
                        </div>

                        <div className="game-info-row">
                            <div className="game-info-title">
                                Platforms
                            </div>

                            <div className="game-info-text">
                                {platforms}
                            </div>
                        </div>

                        <div className="game-info-row">
                            <div className="game-info-title">
                                Status
                            </div>

                            <div className="game-info-text">
                                {status}
                            </div>
                        </div>

                        <div className="game-info-row">
                            <div className="game-info-title">
                                Type
                            </div>

                            <div className="game-info-text">
                                {type}
                            </div>
                        </div>

                    </div>
                </div>

            </Link>

        </article>

    )
}