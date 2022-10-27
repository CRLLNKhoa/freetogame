import classNames from 'classnames';
import {useState, forwardRef} from 'react';
import images from '@/assets/images';
import styles from './Images.module.scss';


const Image = forwardRef(({src, alt, className, fallback = images.noImage, ...props}, ref) => {
    const [_fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(fallback)
    }
    return <img 
                className={classNames( styles.wrapper, className)} 
                ref={ref} 
                alt={alt} 
                src={_fallback || src} 
                onError={handleError} 
                fallback={fallback}
                {...props}
            />
})

export default Image