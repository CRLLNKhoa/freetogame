import styles from './itemDropDown.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemDropDown({ to, title,e}) {
    return (
        <Link to={to} className={cx('wrapper')} onClick={e}>
            {title}
        </Link>
    );
}

export default ItemDropDown;
