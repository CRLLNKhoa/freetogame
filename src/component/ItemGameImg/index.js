import styles from './ItemGameImg.module.scss';
import classNames from 'classnames/bind';
import Image from '../Image';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemGameImg({ img,id }) {
    return (
        <Link to={`/detail/${id}`} className={cx('wrapper')}>
            <div className={cx('box-img')}>
                <Image src={img} />
                <Badge className={cx('badge')}>FREE</Badge>
            </div>
            <div className={cx('loader')}></div>
        </Link>
    );
}

export default ItemGameImg;
