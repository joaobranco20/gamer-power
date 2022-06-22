import { Game } from '../Game';
import './styles.scss';

export function GamesList({ games }) {

    return (
        <div className="container">
            {games.map(game =>
                <Game
                    key={game.id}
                    id={game.id}
                    title={game.title}
                    worth={game.worth}
                    platforms={game.platforms}
                    status={game.status}
                    type={game.type}
                    image={game.image}
                />
            )}
        </div>
    )
}