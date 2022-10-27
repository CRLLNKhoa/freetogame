import styles from './ItemSpecial.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import Image from '@/component/Image';
import { Button } from 'react-bootstrap';

const cx = classNames.bind(styles);

function ItemSpecial({ img, title, amount, amountLeft, descp }) {

    document.title='Free Game Keys, Gift Codes, and Betas! (2022)'
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-img')}>
                <Image className={cx('img',amountLeft > 0 ? '' : 'end-img')} src={img} />
                {amountLeft > 0 ? <span className={cx('free')}>FREE</span> : <span className={cx('ended')}>ENDED</span>}
            </div>
            <div className={cx('body')}>
                <p className={cx('title')}>{title}</p>
                <span className={cx('amount')}>
                    <span className={cx('amount-left')} style={{ width: `${Math.floor((amountLeft / amount) * 100)}%` }}></span>
                </span>
                <p className={cx('descp')}>{descp}</p>
                <div className={cx('bottom')}>
                    <div className={cx('left')}>
                        <span className={cx('gift')}>
                            <FontAwesomeIcon icon={faGift} />
                        </span>
                        <span className={cx('per-amount-left',Math.floor((amountLeft / amount) * 100) > 0 ? '' : 'badge-end')}>{Math.floor((amountLeft / amount) * 100)}% LEFT</span>
                    </div>
                    <div className={cx('right')}>
                        <Button className={cx('btn')} variant="outline-secondary">
                            GET KEY
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemSpecial;
