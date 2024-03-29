import { useEffect, useState } from 'react';

const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img);
        }
        img.onerror = img.onabort = () => {
            reject(src);
        }
        img.src = src;
    })
}

export const useImagePreloader = (src: any) => {
    const [load, setLoad] = useState<boolean>(false);

    useEffect(() => {
        let isCancelled = false;

        const loadImage = async () => {

            if (isCancelled) {
                return load;
            }

            await preloadImage(src);

            if (isCancelled) {
                return load;
            }
            
            setLoad(true);
        }

        loadImage();

        return () => {
            isCancelled = true;
        }
        
    }, [src]); // eslint-disable-line react-hooks/exhaustive-deps
    
    return load;
}