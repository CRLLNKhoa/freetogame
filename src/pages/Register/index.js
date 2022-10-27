import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Image from '@/component/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <Image
                        className={cx('thumb-img')}
                        src="https://www.freetogame.com/assets/images/ftg/register.jpg"
                    />
                    <div className={cx('form')}>
                        <div className={cx('form-header')}>
                            <h1>Create My Account!</h1>
                        </div>
                        <div className={cx('form-body')}>
                            <input placeholder="Username" />
                            <input placeholder="Email Address" />
                            <div className={cx('pass')}>
                                <input className={cx('pass-input')} type="password" placeholder="Password" />
                                <input className={cx('pass-input')} type="password" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <button className={cx('btn-form')}>Create Account</button>
                        <div className={cx('form-bottom')}>
                            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                            <div className={cx('form-bottom-gr')}>
                                <span className={cx('sub-text')}>Already a member?</span>
                                <Link className={cx('link', 'sub')} to='/login'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
