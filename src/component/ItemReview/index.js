import classNames from 'classnames/bind'
import styles from './ItemReview.module.scss'
import Image from '../Image';
import images from '@/assets/images';

const cx = classNames.bind(styles)

function ItemReview({img,user,cmt,time}) {
    return (
        <div className={cx('review-item')}>
            <Image className={cx('img')} src={images.defaultUser} />
            <div className={cx('content-review')}>
                <span className={cx('content-review__header')}>
                    <span className={cx('name')}>{user}</span>
                    <span>{time}</span>
                </span>
                <p>{cmt}</p>
            </div>
        </div>
    );
}

export default ItemReview;
