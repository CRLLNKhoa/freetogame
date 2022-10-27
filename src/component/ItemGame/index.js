import classNames from 'classnames/bind';
import styles from './ItemGame.module.scss';
import Image from '../Image';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemGame({ img, name,id }) {
    return (
        <Link to={`/detail/${id}`} className={cx('wrapper')}>
            <div className={cx('box-img')}>
                <Image className={cx('img')} src={img} />
                <div className={cx("loader")}></div>
            </div>
            <div className={cx('body')}>
                <span className={cx('name')}>{name}</span>
                <Badge>FREE</Badge>
            </div>
        </Link>
    );
}

export default ItemGame;
