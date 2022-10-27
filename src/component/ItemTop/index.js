import classNames from 'classnames/bind';
import styles from './ItemTop.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemTop({ title, img, index, descp, id }) {
    return (
        <Link to={`/detail/${id}`}  className={cx('wrapper')}>
            <span className={cx('num')}>{index}</span>
            <div className={cx('box')}>
                <Image src={img} />
                <div className={cx('loader')}></div>
            </div>
            <div className={cx('info')}>
                <h3>{title}</h3>
                <p>{descp}</p>
                <span className={cx('sub')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faMedal} />
                    {title} is currenty one of the most-played MMO games in October 2022.
                </span>
            </div>
        </Link>
    );
}

export default ItemTop;
