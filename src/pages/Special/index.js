import styles from './Special.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import SpecialData from '@/API/fakeAPI';
import ItemSpecial from '@/component/ItemSpecial';

const cx = classNames.bind(styles);

function Special() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <h1>
                        <FontAwesomeIcon icon={faGift} />
                        Special Offers
                    </h1>
                    <h5 className={cx('sub')}>
                        All special offers, rewards and giveaways are first come, first served, so join now and claim
                        your loot! Plus it's free!
                    </h5>
                    <div className={cx('show-list')}>
                        {SpecialData.map((item, index) => (
                            <ItemSpecial
                                img={item.img}
                                title={item.name}
                                descp={item.descp}
                                amount={item.amount}
                                amountLeft={item.amountLeft}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Special;
