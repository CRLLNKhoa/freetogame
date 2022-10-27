import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import options from '@/API';
import ItemGameDetail from '@/component/ItemGamesDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, function (l) {
        return l.toUpperCase();
    });
}

const handleMostDay = (item, index) => {
    if (index > 5 && index < 10)
        return (
            <ItemGameDetail
                id={item.id}
                img={item.thumbnail}
                genre={item.genre}
                name={item.title}
                shortDescption={item.short_description}
                key={item.id}
            />
        );
};

const handleYouLike = (item, index) => {
    if (index < 4)
        return (
            <ItemGameDetail
                id={item.id}
                img={item.thumbnail}
                genre={item.genre}
                name={item.title}
                shortDescption={item.short_description}
                key={item.id}
            />
        );
};

function Search() {
    const [listGame, setListGame] = useState([]);
    const [a, setA] = useState('');

    useEffect(() => {
        async function ListGame() {
            try {
                const dataListGame = await fetch(
                    'https://free-to-play-games-database.p.rapidapi.com/api/games',
                    options,
                );
                const dataListGameJSON = await dataListGame.json();
                setListGame(dataListGameJSON);
            } catch (error) {
                throw new Error('Lỗi kết nối data!');
            }
        }
        ListGame();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('search')}>
                    <h1>
                        <FontAwesomeIcon icon={faSearch} /> Find Games
                    </h1>
                    <input
                        placeholder="Search for games"
                        className={cx('input-search')}
                        onChange={(e) => setA(e.target.value)}
                        spellCheck
                    />
                    {a && (
                        <div className={cx('show-search')}>
                            {listGame
                                .filter((name) => name.title.includes(titleCase(a)))
                                .map((item, index) => (
                                    <ItemGameDetail
                                        id={item.id}
                                        img={item.thumbnail}
                                        genre={item.genre}
                                        name={item.title}
                                        shortDescption={item.short_description}
                                        key={item.id}
                                    />
                                ))}
                        </div>
                    )}
                </div>
                <div className={cx('you-like')}>
                    <h1>You May Like</h1>
                    <div className={cx('show-search')}>{listGame.map((item, index) => handleYouLike(item, index))}</div>
                </div>
                <div className={cx('most-today')}>
                    <h1>Most Played Today</h1>
                    <div className={cx('show-search')}>{listGame.map((item, index) => handleMostDay(item, index))}</div>
                </div>
            </div>
        </div>
    );
}

export default Search;
