import classNames from 'classnames/bind';
import styles from './ItemGamesDetail.module.scss';
import Image from '../Image';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus, faDesktop, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemGameDetail({ img, name, platform, shortDescption, genre,id }) {
    return (
        <Link to={`/detail/${id}`} className={cx('wrapper')}>
            {' '}
            <div className={cx('box-img')}>
                <Image className={cx('img')} src={img} />
                <div className={cx('loader')}></div>
            </div>
            <div className={cx('body')}>
                <span className={cx('title')}>
                    <span className={cx('name')}>{name}</span>
                    <Badge>FREE</Badge>
                </span>
                <span className={cx('descp')}>{shortDescption}</span>
                <div className={cx('bottom')}>
                    <FontAwesomeIcon
                        className={cx('btn-add')}
                        icon={faSquarePlus}
                        title="Add to library"
                        onClick={() => alert('hello')}
                    />
                    <div className={cx('info')}>
                        <div className={cx('badge')}>{genre}</div>
                        {platform === 'PC (Windows)' ? (
                            <FontAwesomeIcon className={cx('icon')} icon={faDesktop} />
                        ) : (
                            <FontAwesomeIcon className={cx('icon')} icon={faWindowMaximize} />
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ItemGameDetail;
