import styles from './Menudropdown.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function MenuDropDown({ toPage, main, children,icon,e }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>{children}</div>
            {main && <Link className={cx('main-link')} to={toPage} onClick={e} >{main}</Link>}
        </div>
    );
}

export default MenuDropDown;
