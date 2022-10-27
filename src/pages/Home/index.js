import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faRobot, faFire, faTrophy, faTags, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import ItemGame from '@/component/ItemGame';
import { useState, useEffect } from 'react';
import ItemGameRow from '@/component/ItemGameRow';
import ItemGameImg from '@/component/ItemGameImg';
import images from '@/assets/images';
import Image from '@/component/Image';
import options from '@/API';

const cx = classNames.bind(styles);

const rdGame1 = Math.floor(Math.random() * 10 + 500);
const rdGame2 = Math.floor(Math.random() * 10 + 500);

function Home() {
    document.title = 'Download & Track Free Games and MMO Games (2022)';
    const [num, setNum] = useState(12);
    const [game1, setGame1] = useState({});
    const [game2, setGame2] = useState({});
    const [popularity, setPopularity] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [genre, setGenre] = useState([]);
    const [tabGenre, setTabGenre] = useState('mmorpg');

    const handlePopularity = (item, index) => {
        if (index < 7)
            return (
                <ItemGameRow
                    id={item.id}
                    key={item.id}
                    name={item.title}
                    shortDescription={item.short_description}
                    genre={item.genre}
                    img={item.thumbnail}
                    platform={item.platform}
                />
            );
    };

    const handleTopGame = (item, index) => {
        if (12 < index && index < 17)
            return <ItemGame id={item.id} key={item.id} name={item.title} img={item.thumbnail} />;
    };

    const handleMostGameToday = (item, index) => {
        if (index >= 10 && index < 14) return <ItemGameImg id={item.id} key={index} img={item.thumbnail} />;
    };

    const handleGenre = (item, index) => {
        if (index < num) return <ItemGame id={item.id} key={item.id} img={item.thumbnail} name={item.title} />;
    };

    useEffect(() => {
        async function Game() {
            try {
                // Recomment Game
                const dataGame1 = await fetch(
                    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${rdGame1}`,
                    options,
                );
                const dataGame1JSON = await dataGame1.json();
                setGame1(dataGame1JSON);
                const dataGame2 = await fetch(
                    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${rdGame2}`,
                    options,
                );
                const dataGame2JSON = await dataGame2.json();
                setGame2(dataGame2JSON);
            } catch (error) {
                throw new Error('Lỗi kết nối data!');
            }
        }
        Game();
    }, []);

    useEffect(() => {
        async function GamePopularity() {
            try {
                const dataPopularity = await fetch(
                    'https://free-to-play-games-database.p.rapidapi.com/api/games',
                    options,
                );
                const dataPopularityJSON = await dataPopularity.json();

                setPopularity(dataPopularityJSON);
            } catch (error) {
                throw new Error('Lỗi kết nối data!');
            }
        }
        GamePopularity();
    }, []);

    useEffect(() => {
        async function GameGenre() {
            try {
                const dataGenre = await fetch(
                    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${tabGenre}`,
                    options,
                );
                const dataGenreJSON = await dataGenre.json();
                setGenre(dataGenreJSON);
            } catch (error) {
                throw new Error('Lỗi kết nối data!');
            }
        }
        GameGenre();
    }, [tabGenre]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <section className={cx('banner')}>
                    <div className={cx('banner__body')}>
                        <h1 className={cx('banner__title')}>
                            Find & track the best <span className={cx('blue-text')}>free-to-play</span> games!
                        </h1>
                        <h4 className={cx('banner__sub-title')}>
                            Track what you've played and search for what to play next! Plus get free premium loot!
                        </h4>
                        <div className={cx('group-btn')}>
                            <Button className={cx('btn-banner', 'bold')}>
                                GET STARTED<span className={cx('sub-btn')}> It's free</span>
                            </Button>
                            <Button className={cx('btn-banner')} variant="outline-secondary">
                                Browser Games
                            </Button>
                        </div>
                    </div>
                </section>

                <div className={cx('recommendations')}>
                    <div className={cx('recommendations__header')}>
                        <h1>
                            <FontAwesomeIcon className={cx('icon')} icon={faRobot} />
                            Personalized Recommendations
                        </h1>
                        <span>
                            <FontAwesomeIcon className={cx('icon')} icon={faCircleQuestion} />
                            Log In to view your personalized recommendations!
                        </span>
                    </div>
                    <div className={cx('recommendations__container')}>
                        {popularity.map((item, index) => handleTopGame(item, index))}
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx('popularity')}>
                        <h1>
                            <FontAwesomeIcon icon={faFire} />
                            Popularity games
                        </h1>
                        {popularity.map((item, index) => handlePopularity(item, index))}
                        <Button variant="outline-secondary" className={cx('btn-more')}>
                            <Link to="/games">More Games</Link>
                        </Button>
                    </div>
                    <div className={cx('most-game-today')}>
                        <h1>
                            <FontAwesomeIcon icon={faTrophy} />
                            Most Games Today
                        </h1>
                        <div className={cx('most-game-list')}>{popularity.map((item, index) => handleMostGameToday(item, index))}</div>
                    </div>
                </div>

                <div className={cx('genre')}>
                    <div className={cx('genre-header')}>
                        <h1>
                            <FontAwesomeIcon icon={faTags} /> Genre
                        </h1>
                        <div className={cx('tabs')}>
                            <span
                                className={cx('tab', tabIndex === 0 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(0);
                                    setTabGenre('mmorpg');
                                    setNum(12);
                                }}
                            >
                                MMORPG
                            </span>
                            <span
                                className={cx('tab', tabIndex === 1 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(1);
                                    setTabGenre('shooter');
                                    setNum(12);
                                }}
                            >
                                SHOOTER
                            </span>
                            <span
                                className={cx('tab', tabIndex === 2 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(2);
                                    setTabGenre('pvp');
                                    setNum(12);
                                }}
                            >
                                PVP
                            </span>
                            <span
                                className={cx('tab', tabIndex === 3 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(3);
                                    setTabGenre('moba');
                                    setNum(12);
                                }}
                            >
                                MOBA
                            </span>
                            <span
                                className={cx('tab', tabIndex === 4 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(4);
                                    setTabGenre('sports');
                                    setNum(12);
                                }}
                            >
                                SPORTS
                            </span>
                            <span
                                className={cx('tab', tabIndex === 5 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(5);
                                    setTabGenre('strategy');
                                    setNum(12);
                                }}
                            >
                                STRATEGY
                            </span>
                            <span
                                className={cx('tab', tabIndex === 6 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(6);
                                    setTabGenre('open-world');
                                    setNum(12);
                                }}
                            >
                                OPEN WORLD
                            </span>
                            <span
                                className={cx('tab', tabIndex === 7 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(7);
                                    setTabGenre('sandbox');
                                    setNum(12);
                                }}
                            >
                                SANDBOX
                            </span>
                            <span
                                className={cx('tab', tabIndex === 8 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(8);
                                    setTabGenre('survival');
                                    setNum(12);
                                }}
                            >
                                SURVIVAL
                            </span>
                            <span
                                className={cx('tab', tabIndex === 9 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(9);
                                    setTabGenre('card');
                                    setNum(12);
                                }}
                            >
                                CARD
                            </span>
                            <span
                                className={cx('tab', tabIndex === 10 && 'tabActive')}
                                onClick={() => {
                                    setTabIndex(10);
                                    setTabGenre('battle-royale');
                                    setNum(12);
                                }}
                            >
                                BATTLE ROYALE
                            </span>
                        </div>
                    </div>
                    <div className={cx('list-genre')}>{genre.map((item, index) => handleGenre(item, index))}</div>
                    <Button className={cx('see-more')} variant="outline-secondary" onClick={() => setNum(num + 4)}>
                        SEE MORE
                    </Button>
                </div>

                <div className={cx('community')}>
                    <h1>Community Recommendations</h1>
                    <div className={cx('community-list')}>
                        <div className={cx('community-item')}>
                            <ItemGame id={game2.id} className={cx('img-item')} img={game2.thumbnail} />
                            <div className={cx('community-content')}>
                                <span>
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    If you have been looking for a game like Breath of the Wild on pc, look no further.
                                    It is clear that they took a lot of inspiration from this game and made a fantastic
                                    game on pc. I can reccommend this game for everyone that likes open world
                                </span>
                                <span>
                                    <Image src={images.defaultUser} />
                                    By reggert32
                                </span>
                            </div>
                        </div>
                        <div className={cx('community-item')}>
                            <ItemGame id={game1.id} className={cx('img-item')} img={game1.thumbnail} />
                            <div className={cx('community-content')}>
                                <span>
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    If you have been looking for a game like Breath of the Wild on pc, look no further.
                                    It is clear that they took a lot of inspiration from this game and made a fantastic
                                    game on pc. I can reccommend this game for everyone that likes open world
                                </span>
                                <span>
                                    <Image src={images.defaultUser} />
                                    By reggert32
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('join-now')}>
                    <div>
                        <Image src="https://www.freetogame.com/assets/images/ftg-img.jpg" />
                        <div className={cx('join-now__content')}>
                            <h1>More Fun and More Rewarding!</h1>
                            <p>
                                We are FreeToGame, a new gaming platform that brings all the best Free-to-Play
                                Multiplayer Games and MMO Games into one place while rewarding gamers with free premium
                                loot and exlusive perks. Plus maintain your own games library, track what you've played
                                and search for what to play next!
                            </p>
                            <div className={cx('join-now__btn-gr')}>
                                <Button>
                                    <Link className={cx('bold')} to="/register">
                                        JOIN NOW
                                    </Link>
                                </Button>
                                <Button variant="outline-secondary">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
