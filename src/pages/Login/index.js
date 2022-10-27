import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Image from '@/component/Image';
import images from '@/assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Login() {
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <Image
                        className={cx('thumb-img')}
                        src="https://www.freetogame.com/assets/images/ftg/freetogame-image.jpg"
                    />
                    <div className={cx('form')}>
                        <div className={cx('form-header')}>
                            <Image className={cx('logo')} src={images.logoFooter} />
                            <h1>Log in to FreeToGame</h1>
                        </div>
                        <div className={cx('form-body')}>
                            <input placeholder="Username or Email" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button className={cx('btn-form')}>Login</button>
                        <div className={cx('form-bottom')}>
                            <Link className={cx('link','sub')}>Forgot Password?</Link>
                            <div className={cx('form-bottom-gr')}>
                                <span className={cx('sub-text')}>Not a member yet?</span>
                                <Link className={cx('link','sub')} to='/register'>Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
