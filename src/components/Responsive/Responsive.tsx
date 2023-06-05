import { useState, useEffect } from 'react'

export interface ResponsiveInterface {
    desktop: JSX.Element;
    mobile: JSX.Element;
}

const Responsive = ({ desktop, mobile }: ResponsiveInterface) => {
    const [view, set_view] = useState('desktop')

    useEffect(() => {
        responsiveView();
        window.addEventListener('resize', responsiveView);
        return () => {
            window.removeEventListener('resize', responsiveView);
        }
    }, [])

    const responsiveView = () => {
        let widthOfWindow = window.innerWidth
        if (widthOfWindow <= 575.98) set_view('mobile');
        else if (widthOfWindow >= 576 && widthOfWindow <= 767.98) set_view('mobile');
        else if (widthOfWindow >= 768 && widthOfWindow <= 991.98) set_view('desktop');
        else if (widthOfWindow >= 992 && widthOfWindow <= 1199.98) set_view('desktop');
        else if (widthOfWindow >= 1200) set_view('desktop');
    }

    if (view === 'desktop') return desktop
    else if (view === 'mobile') return mobile
    else return null
}

export default Responsive;

