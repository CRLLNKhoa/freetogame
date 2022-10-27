import classNames from 'classnames/bind';
import styles from './ItemGameRow.module.scss';
import Image from '../Image';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemGameRow({ img, name, shortDescription, platform, genre, id }) {
    return (
        <Link to={`/detail/${id}`} className={cx('wrapper')}>
            <Image src={img} />
            <div className={cx('info')}>
                <h2 className={cx('name')}>{name}</h2>
                <span className={cx('desc')}>{shortDescription}</span>
                <div className={cx('badge')}>{genre}</div>
            </div>
            <div className={cx('platform')}>
                {platform === 'PC (Windows)' ? (
                    <FontAwesomeIcon className={cx('icon')} icon={faDesktop} />
                ) : (
                    <FontAwesomeIcon className={cx('icon')} icon={faWindowMaximize} />
                )}
                <Badge className={cx('badge-bt')}>FREE</Badge>
            </div>
        </Link>
    );
}

export default ItemGameRow;
