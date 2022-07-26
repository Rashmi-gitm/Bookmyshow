import React from 'react';
import Header  from '../../components/header/Header';

import img1 from '../../assests/1.avif';
import img2 from '../../assests/2.avif';
import img3 from '../../assests/3.avif';
import img4 from '../../assests/4.avif';
import ImageCarousel from '../../components/imageCarousel/ImageCarousel';

const Home =() => {
    return(
        <div>
            <Header/>
            <ImageCarousel images= {[img1,img2, img3, img4]}/>
        </div>
    )
}

export default Home;