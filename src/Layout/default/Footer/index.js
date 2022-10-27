import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import Image from '@/component/Image';
import images from '@/assets/images';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('block')}>
                        <span>About us</span>
                        <span>API</span>
                        <span>Contact us</span>
                    </div>
                    <div className={cx('block')}>
                        <span>Help/FAQ</span>
                        <span>Support & Bugs</span>
                        <span>Feature Request</span>
                    </div>
                    <div className={cx('block')}>
                        <span>Privacy Policy</span>
                        <span>Cookies Policy</span>
                        <span>Terms of Use</span>
                    </div>
                    <Image className={cx('logo')} src={images.logoFooter} />
                </div>
                <div className={cx('bottom')}>
                    <span className={cx('copy-right')}>
                        © 2022 Digiwalls Media, all rights reserved. All trademarks are property of their respective
                        owners. @clone by LNKhoa
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
