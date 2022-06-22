import { useEffect, useState } from "react";

import { GamesList } from "../../components/GamesList";
import { Search } from "../../components/Search";

import './styles.scss'

export function Home() {

    const [games, setGames] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function getGames() {
            const response = await fetch('https://www.gamerpower.com/api/giveaways');
            const data = await response.json();
            setGames(data);
        }
        getGames();
    }, []);

    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(search))

    function getSearchValue(e) {
        e.preventDefault()
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <>
            <Search
                total={filteredGames.length}
                search={getSearchValue}
            />

            <section className="home">
                <GamesList games={filteredGames} />
            </section>
        </>
    )
}