import classNames from 'classnames/bind';
import styles from './Games.module.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import options from '@/API';
import ItemGameImg from '@/component/ItemGameImg';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ItemGameDetail from '@/component/ItemGamesDetail';

const cx = classNames.bind(styles);

const platformOption = [
    { value: 'pc', label: 'PC "Window"' },
    { value: 'browser', label: 'Brower Web' },
    { value: 'all', label: 'All Platform' },
];

const genreTagOption = [
    { value: 'mmorpg', label: 'MMORPG' },
    { value: 'shooter', label: 'Shooter' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'moba', label: 'Moba' },
    { value: 'racing', label: 'Racing' },
    { value: 'sports', label: 'Sports' },
    { value: 'social', label: 'Social' },
    { value: 'sandbox', label: 'Sandbox' },
    { value: 'open-world', label: 'Open-world' },
    { value: 'survival', label: 'Survival' },
];

const SortByOption = [
    { value: 'release-date', label: 'Release-date' },
    { value: 'popularity', label: 'Popularity' },
    { value: 'alphabetical ', label: 'Alphabetical ' },
    { value: 'relevance ', label: 'Relevance ' },
];

function Games() {
    const [listGame, setListGame] = useState([]);
    const [listGameSort, setListGameSort] = useState([]);
    const countGames = listGameSort.length;
    const [platform, setPlatform] = useState('browser');
    const [genre, setGenreTag] = useState('mmorpg');
    const [sort, setSort] = useState('release-date');

    const handleTopGame = (item, index) => {
        if (index < 3) return <ItemGameImg id={item.id} key={item.id} img={item.thumbnail} />;
    };

    useEffect(() => {
        async function ListGameSort() {
            try {
                const dataListGameSort = await fetch(
                    `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&category=${genre}&sort-by=${sort}`,
                    options,
                );
                const dataListGameSortJSON = await dataListGameSort.json();
                setListGameSort(dataListGameSortJSON);
            } catch (error) {
                throw new Error('Lỗi kết nối data!');
            }
        }
        ListGameSort();
    }, [genre, sort, platform]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top-game')}>
                    <h1>Top Free Games for PC and Browser In 2022!</h1>
                    <span>
                        <span className={cx('num')}>{countGames}</span>free-to-play games found in our games list!
                    </span>
                    <div className={cx('top-game-list')}>
                        {listGame.map((item, index) => handleTopGame(item, index))}
                    </div>
                </div>
                <div className={cx('sort-games')}>
                    <div className={cx('header')}>
                        <div className={cx('filter')}>
                            <span>Platform: </span>
                            <Select
                                className="react-select-container"
                                id="platform"
                                options={platformOption}
                                onChange={(e) => setPlatform(e.value)}
                            />
                        </div>
                        <div className={cx('filter')}>
                            <span>Genre/Tag: </span>
                            <Select
                                className="react-select-container"
                                id="platform"
                                options={genreTagOption}
                                onChange={(e) => setGenreTag(e.value)}
                            />
                        </div>
                        <div className={cx('filter')}>
                            <span>Sort by: </span>
                            <Select
                                className="react-select-container"
                                id="platform"
                                options={SortByOption}
                                onChange={(e) => setSort(e.value)}
                            />
                        </div>
                        <div className={cx('filter')}>
                            <Link to="" className={cx('label')}>
                                <FontAwesomeIcon className={cx('label-icon')} icon={faSliders} />
                                Advanced Filters
                            </Link>
                        </div>
                    </div>
                    <div className={cx('show-list')}>
                        {listGameSort.map((item, index) => (
                            <ItemGameDetail
                                id={item.id}
                                key={item.id}
                                platform={item.platform}
                                genre={item.genre}
                                img={item.thumbnail}
                                name={item.title}
                                shortDescption={item.short_description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Games;
