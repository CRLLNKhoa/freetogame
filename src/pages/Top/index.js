import classNames from 'classnames/bind';
import styles from './Top.module.scss';
import React from 'react';
import { useState, useEffect } from 'react';
import options from '@/API';
import Select from 'react-select';
import ItemTop from '@/component/ItemTop';

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

function Top() {
    const [listGameSort, setListGameSort] = useState([]);
    const [platform, setPlatform] = useState('all');
    const [genre, setGenreTag] = useState('mmorpg');
    const [platformText, setPlatformText] = useState('PC and Browser');
    const [genreText, setGenreTagText] = useState('To Play');

    const handleTopGame = (item, index) => {
        if (index < 10) return <ItemTop key={item.id} id={item.id} img={item.thumbnail} title={item.title} index={index+1} descp={item.short_description} />;
    };

    useEffect(() => {
        async function ListGameSort() {
            try {
                const dataListGameSort = await fetch(
                    `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&category=${genre}&sort-by=popularity`,
                    options,
                );
                const dataListGameSortJSON = await dataListGameSort.json();
                setListGameSort(dataListGameSortJSON);
            } catch (error) {
                throw new Error('Lỗi kết nối data!');
            }
        }
        ListGameSort();
    }, [genre, platform]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h1>
                        Top 10 Free <span>{genreText}</span> Games for <span>{platformText}</span> in October 2022
                    </h1>
                    <div className={cx('body')}>
                        <div className={cx('filter')}>
                            <span>More Top 10's: </span>
                            <Select
                                className={cx('react-select-container')}
                                id="platform"
                                options={genreTagOption}
                                onChange={(e) => {
                                    setGenreTag(e.value);
                                    setGenreTagText(e.label);
                                }}
                            />
                        </div>
                        <div className={cx('filter')}>
                            <span>Platform: </span>
                            <Select
                                className={cx('react-select-container')}
                                id="platform"
                                options={platformOption}
                                onChange={(e) => {
                                    setPlatform(e.value);
                                    setPlatformText(e.label);
                                }}
                            />
                        </div>
                    </div>
                    <p className={cx('sub')}>
                        Below, you can find our ongoing Top 10 Free {genreText} Games in October 2022. Our ranking is
                        based on our users preferences during this calendar month and all results are updated daily. You
                        can also use the menu to explore even more Top 10's for your favorite platforms.
                    </p>
                    <div className={cx('show-list')}>
                        {listGameSort.map((item, index) => handleTopGame(item, index))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;
