import classNames from 'classnames/bind';
import { Button, Container } from 'react-bootstrap';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Image from '@/component/Image';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faEllipsis,
    faFolder,
    faGift,
    faSearch,
    faRightFromBracket,
    faBars,
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useState } from 'react';
import TippySub from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react/headless'; // different import path!
import MenuDropDown from '@/component/Menudropdown/index';
import ItemDropDown from '@/component/Menudropdown/itemDropDown';
import * as data from '@/data/index';
import Badge from 'react-bootstrap/Badge';

const cx = classNames.bind(styles);

function Header({user,setUser}) {

    const [menuMb, setMenuMb] = useState(false);

    const handleClick = () => {
        setMenuMb(!menuMb);
        console.log(menuMb);
    };


    return (
        <header className={cx('wrapper')}>
            <Container className={cx('al-center', 'df')}>
                <Link to="/">
                    <Image className={cx('logo')} src={images.logo} />
                </Link>
                <nav className={cx('df-a', 'nav')}>
                    <Tippy
                        trigger="click"
                        hideOnClick
                        placement="bottom-start"
                        interactive
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <MenuDropDown toPage="/games" main="Free-to-games">
                                    {data.CATEGORY.map((item, index) => (
                                        <ItemDropDown to={item.to} title={item.name} key={index} />
                                    ))}
                                </MenuDropDown>
                            </div>
                        )}
                    >
                        <span className={cx('cus')}>
                            Free Games <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </Tippy>
                    <Tippy
                        trigger="click"
                        hideOnClick
                        placement="bottom-start"
                        interactive
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <MenuDropDown toPage="/browser" main="Browser Games">
                                    {data.Browser.map((item, index) => (
                                        <ItemDropDown to={item.to} title={item.name} key={index} />
                                    ))}
                                </MenuDropDown>
                            </div>
                        )}
                    >
                        <span className={cx('cus')}>
                            Free Games <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </Tippy>
                    <span className={cx('cus')}>
                        <Link to="/giveaways">
                            Special Offers
                            <Badge className={cx('ml-5')} pill bg="primary">
                                9
                            </Badge>
                        </Link>
                    </span>
                    <span className={cx('cus')}>
                        <Link to="/top">Top 2022</Link>
                    </span>
                    <span className={cx('cus')}>
                        <Tippy
                            trigger="click"
                            hideOnClick
                            placement="bottom-start"
                            interactive
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <MenuDropDown main="Browser web">
                                        {data.Explore.map((item, index) => (
                                            <ItemDropDown href={item.href} title={item.name} key={index} />
                                        ))}
                                    </MenuDropDown>
                                </div>
                            )}
                        >
                            <span className={cx('cus')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                        </Tippy>
                    </span>
                </nav>
                <div className={cx('nav-action')}>
                    <div className={cx('action')}>
                        <TippySub offset={[0, 28]} content={<span className={cx('sub')}>Search</span>}>
                            <Link to="/search" className={cx('cus')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </Link>
                        </TippySub>
                        <TippySub offset={[0, 28]} content={<span className={cx('sub')}>Gift Inventory</span>}>
                            <Link to="/gift-inventory" className={cx('cus')}>
                                <FontAwesomeIcon icon={faGift} />
                            </Link>
                        </TippySub>
                        <TippySub offset={[0, 28]} content={<span className={cx('sub')}>My Games Library</span>}>
                            <Link to="/my-library" className={cx('cus')}>
                                <FontAwesomeIcon icon={faFolder} />
                            </Link>
                        </TippySub>
                    </div>
                    <div className={cx('user')}>
                        {user.login===false ? (
                            <div className={cx('not-login')}>
                                <Link to="/login" className={cx('cus')}>
                                    Login
                                </Link>
                                <Button variant="outline-primary" size="lg">
                                    <Link to="/register"> Join Free</Link>
                                </Button>
                            </div>
                        ) : (
                            <div className={cx('logined')}>
                                <TippySub
                                    offset={[0, 28]}
                                    content={
                                        <span className={cx('sub')}>
                                            {<span>Lv {Math.floor(data.User[0].exp / 200)}</span>}
                                        </span>
                                    }
                                >
                                    <div className={cx('exp')}>
                                        <span>Lv {Math.floor(data.User[0].exp / 200)}</span>
                                        <span className={cx('exp-tree')}>
                                            <span
                                                className={cx('exp-claim')}
                                                style={{ width: `${((data.User[0].exp % 200) / 200) * 100}%` }}
                                            ></span>
                                        </span>
                                    </div>
                                </TippySub>
                                <div className={cx('user-info')}>
                                    <Image src={images.defaultUser} style={{ width: '24px', height: '24px' }} />
                                    <Tippy
                                        trigger="click"
                                        hideOnClick
                                        placement="bottom-start"
                                        interactive
                                        render={(attrs) => (
                                            <div className="box" tabIndex="-1" {...attrs}>
                                                <MenuDropDown main="Logout" e={() => {setUser(true)}} icon={faRightFromBracket}>
                                                    {data.USERMENU.map((item, index) => (
                                                        <ItemDropDown
                                                            to={item.to}
                                                            title={item.name}
                                                            key={index}
                                                            onClick={item.event}
                                                        ></ItemDropDown>
                                                    ))}
                                                </MenuDropDown>
                                            </div>
                                        )}
                                    >
                                        <span className={cx('name')}>
                                            {data.User[0].account} <FontAwesomeIcon icon={faAngleDown} />
                                        </span>
                                    </Tippy>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx('btn-menu-mb')} onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={cx('menu-mb', menuMb ? 'show' : 'hide')}>
                    <Tippy
                        trigger="click"
                        hideOnClick
                        placement="bottom-start"
                        interactive
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <MenuDropDown toPage="/games" main="Free-to-games">
                                    {data.CATEGORY.map((item, index) => (
                                        <ItemDropDown to={item.to} title={item.name} key={index} />
                                    ))}
                                </MenuDropDown>
                            </div>
                        )}
                    >
                        <span className={cx('cus')}>
                            Free Games <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </Tippy>
                    <Tippy
                        trigger="click"
                        hideOnClick
                        placement="bottom-start"
                        interactive
                        render={(attrs) => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <MenuDropDown toPage="/browser" main="Browser Games">
                                    {data.Browser.map((item, index) => (
                                        <ItemDropDown to={item.to} title={item.name} key={index} />
                                    ))}
                                </MenuDropDown>
                            </div>
                        )}
                    >
                        <span className={cx('cus')}>
                            Free Games <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </Tippy>
                    <span className={cx('cus')}>
                        <Link to="/giveaways">
                            Special Offers
                            <Badge className={cx('ml-5')} pill bg="primary">
                                9
                            </Badge>
                        </Link>
                    </span>
                    <span className={cx('cus')}>
                        <Link to="/top">Top 2022</Link>
                    </span>
                    <span className={cx('cus')}>
                        <Tippy
                            trigger="click"
                            hideOnClick
                            placement="bottom-start"
                            interactive
                            render={(attrs) => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                    <MenuDropDown main="Browser web">
                                        {data.Explore.map((item, index) => (
                                            <ItemDropDown href={item.href} title={item.name} key={index} />
                                        ))}
                                    </MenuDropDown>
                                </div>
                            )}
                        >
                            <span className={cx('cus')}>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </span>
                        </Tippy>
                    </span>
                    <div className={cx('action')}>
                        <TippySub offset={[0, 28]} content={<span className={cx('sub')}>Search</span>}>
                            <Link to="/search" className={cx('cus')}>
                                <FontAwesomeIcon icon={faSearch} />
                                <span className={cx('sub-cus')}>Search</span>
                            </Link>
                        </TippySub>
                        <TippySub offset={[0, 28]} content={<span className={cx('sub')}>Gift Inventory</span>}>
                            <Link to="/gift-inventory" className={cx('cus')}>
                                <FontAwesomeIcon icon={faGift} />
                                <span className={cx('sub-cus')}>Gift Inventory</span>
                            </Link>
                        </TippySub>
                        <TippySub offset={[0, 28]} content={<span className={cx('sub')}>My Games Library</span>}>
                            <Link to="/my-library" className={cx('cus')}>
                                <FontAwesomeIcon icon={faFolder} />
                                <span className={cx('sub-cus')}>My Games Library</span>
                            </Link>
                        </TippySub>
                    </div>
                    <Link to="/login" className={cx('cus')} onClick={() => {setMenuMb(false)}}>
                        Login
                    </Link>
                </div>
            </Container>
        </header>
    );
}

export default Header;
