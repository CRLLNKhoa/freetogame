import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import options from '@/API';
import Image from '@/component/Image';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile, faFaceMeh, faFaceFrown, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faUser, faAt, faCode, faTags, faCirclePlay, faCalendarDay, faInfo } from '@fortawesome/free-solid-svg-icons';
import images from '@/assets/images';
import ItemReview from '@/component/ItemReview';
const cx = classNames.bind(styles);

const review = [
    {
        user: 'Admin',
        time: '1 day ago',
        cmt: 'Test review ...',
    },
    {
        user: 'Bot',
        time: '1 day ago',
        cmt: 'Test review ...',
    },
];

function Detail() {
    const { id } = useParams();
    const [detailGame, setDetailGame] = useState([]);
    const [screenshort, setScreenShorts] = useState([]);
    const [system, setSystem] = useState({});

    useEffect(() => {
        async function detailGame() {
            try {
                const dataGame = await fetch(
                    `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
                    options,
                );
                const dataGameJSON = await dataGame.json();
                const screenShortsJson = await dataGameJSON.screenshots;
                const systemJson = await dataGameJSON.minimum_system_requirements;
                setDetailGame(dataGameJSON);
                setScreenShorts(screenShortsJson);
                setSystem(systemJson);
            } catch (error) {
                throw new Error('Lỗi kết nối data!');
            }
        }
        detailGame();
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <Image className={cx('background')} src={detailGame.thumbnail} />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('left')}>
                        <div className={cx('box-img')}>
                            <Image src={detailGame.thumbnail} />
                        </div>
                        <div className={cx('group-btn')}>
                            <span className={cx('badge')}>FREE</span>
                            <Button className={cx('btn')}>PLAY NOW</Button>
                        </div>
                        <div className={cx('list-action')}>
                            <div className={cx('item-action')}>
                                <span className={cx('green', 'icon')}>
                                    <FontAwesomeIcon icon={faFaceSmile} />
                                </span>
                                <span>0</span>
                                <span>LIKE</span>
                            </div>
                            <div className={cx('item-action')}>
                                <span className={cx('icon')}>
                                    <FontAwesomeIcon icon={faFaceMeh} />
                                </span>
                                <span>0</span>
                                <span>MEH</span>
                            </div>
                            <div className={cx('item-action')}>
                                <span className={cx('red', 'icon')}>
                                    <FontAwesomeIcon icon={faFaceFrown} />
                                </span>
                                <span>0</span>
                                <span>DISLIKE</span>
                            </div>
                            <div className={cx('item-action')}>
                                <span className={cx('blue', 'icon')}>
                                    <FontAwesomeIcon icon={faSquarePlus} />
                                </span>
                                <span>1</span>
                                <span>ADD</span>
                            </div>
                        </div>
                        <span className={cx('label')}>
                            <FontAwesomeIcon className={cx('ml-10')} icon={faUser} />
                            Requires 3rd-Party Account
                        </span>
                    </div>
                    <div className={cx('right')}>
                        <span className={cx('breadcrumb')}>
                            <Link to="/">Home</Link>
                            <span>&ensp; &gt; &ensp;</span>
                            <Link to="/games">Free games</Link>
                            <span>&ensp; &gt; &ensp;</span>
                            <span>{detailGame.title}</span>
                        </span>
                        <h1 className={cx('title')}>{detailGame.title}</h1>
                        <div className={cx('block')}>
                            <div className={cx('block-left')}>
                                <span className={cx('label1')}>
                                    <FontAwesomeIcon icon={faCode} className={cx('mr-10')} />
                                    Developer: {detailGame.developer}
                                </span>
                                <span className={cx('label1')}>
                                    <FontAwesomeIcon icon={faAt} className={cx('mr-10')} />
                                    Publisher: {detailGame.publisher}
                                </span>
                                <span className={cx('label1')}>
                                    <FontAwesomeIcon icon={faCalendarDay} className={cx('mr-10')} />
                                    Meeting day: {detailGame.release_date}
                                </span>
                                <span className={cx('label1')}>
                                    <FontAwesomeIcon icon={faCirclePlay} className={cx('mr-10')} />
                                    Platform: {detailGame.platform}
                                </span>
                                <span className={cx('label1')}>
                                    <FontAwesomeIcon icon={faTags} className={cx('mr-10')} />
                                    Genre: {detailGame.genre}
                                </span>
                            </div>
                            <div className={cx('block-right')}>
                                <div className={cx('circle-wrap')}>
                                    <div className={cx('circle')}>
                                        <div className={cx('mask', 'full')}>
                                            <div className={cx('fill')}></div>
                                        </div>
                                        <div className={cx('mask', 'half')}>
                                            <div className={cx('fill')}></div>
                                        </div>
                                        <div className={cx('inside-circle')}> 75% </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('preview')}>
                            <div className={cx('preview-header')}>
                                <span>What do you think about {detailGame.title}?</span>
                                <span className={cx('preview-header__action')}>
                                    <span className={cx('action-preview')}>
                                        <FontAwesomeIcon className={cx('mr-10')} icon={faFaceSmile} />1
                                    </span>
                                    <span className={cx('action-preview')}>
                                        <FontAwesomeIcon className={cx('mr-10')} icon={faFaceMeh} />1
                                    </span>
                                    <span className={cx('action-preview')}>
                                        <FontAwesomeIcon className={cx('mr-10')} icon={faFaceFrown} />1
                                    </span>
                                </span>
                            </div>
                            <div className={cx('preview-body')}>
                                <Image src={images.defaultUser} />
                                <textarea
                                    placeholder={`Write review for ${detailGame.title}! Share you thoughts with our community.`}
                                />
                                <button>SEND</button>
                            </div>
                        </div>
                        <div className={cx('about')}>
                            <h1>About {detailGame.title}</h1>
                            <p className={cx('about-p')}>{detailGame.description}</p>
                        </div>
                        <div className={cx('infomation')}>
                            <h1>Additional Information</h1>
                            <span className={cx('infomation-header')}>
                                <FontAwesomeIcon className={cx('mr-10')} icon={faInfo} />
                                Please note this free-to-play game may or may not offer optional in-game purchases.
                            </span>
                            <div className={cx('infomation__content')}>
                                <span className={cx('infomation__content-item')}>
                                    <span>Title</span>
                                    <span>{detailGame.title}</span>
                                </span>
                                <span className={cx('infomation__content-item')}>
                                    <span>Developer</span>
                                    <span>{detailGame.developer}</span>
                                </span>
                                <span className={cx('infomation__content-item')}>
                                    <span>Publisher</span>
                                    <span>{detailGame.publisher}</span>
                                </span>
                                <span className={cx('infomation__content-item')}>
                                    <span>Release Date</span>
                                    <span>{detailGame.release_date}</span>
                                </span>
                                <span className={cx('infomation__content-item')}>
                                    <span>Genre</span>
                                    <span>{detailGame.genre}</span>
                                </span>
                                <span className={cx('infomation__content-item')}>
                                    <span>Platform</span>
                                    <span>{detailGame.platform}</span>
                                </span>
                            </div>
                        </div>
                        <div className={cx('screenshots')}>
                            <h1>{detailGame.title} Screenshots</h1>
                            <div className={cx('box-screenshorts')}>
                                {screenshort.map((item) => (
                                    <Image className={cx('img-screenshorts')} src={item.image} key={item.id} />
                                ))}
                            </div>
                        </div>
                        {detailGame.minimum_system_requirements && (
                            <div className={cx('system')}>
                                <h1>Minimum System Requirements (Windows)</h1>
                                <div className={cx('system-box')}>
                                    <span className={cx('system-item')}>
                                        <span>OS</span>
                                        <span>{system.os}</span>
                                    </span>
                                    <span className={cx('system-item')}>
                                        <span>OS</span>
                                        <span>{system.processor}</span>
                                    </span>
                                    <span className={cx('system-item')}>
                                        <span>Memory</span>
                                        <span>{system.memory}</span>
                                    </span>
                                    <span className={cx('system-item')}>
                                        <span>Graphics</span>
                                        <span>{system.graphics}</span>
                                    </span>
                                    <span className={cx('system-item')}>
                                        <span>Storage</span>
                                        <span>{system.storage}</span>
                                    </span>
                                    <span className={cx('system-item')}>
                                        <span>Additional Notes</span>
                                        <span>Specifications may change during development</span>
                                    </span>
                                </div>
                            </div>
                        )}
                        <div className={cx('show-review')}>
                            <h1>User review</h1>
                            <div className={cx('list-review')}>
                                {review.map((item, index) => (
                                    <ItemReview key={index} user={item.user} time={item.time} cmt={item.cmt} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
