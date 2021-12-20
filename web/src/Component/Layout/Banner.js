

import { Carousel } from 'antd';

const contentStyle = {
    height: '500px',
    color: '#ff4040',
    lineHeight: '300px',
    textAlign: 'center',
    background: '#364d79',
};

const Banner = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fbanner2.jpg?alt=media&token=d38be507-53d2-47ba-a309-970f19eb5c68" alt=""/>
                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fbanner1.jpg?alt=media&token=eadb2501-139f-42a0-8a9d-ff0adaacdea8" alt=""/>

                    </h3>
                </div>
                <div>
                    <h3 style={contentStyle}> <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/></h3>
                </div>          
            </Carousel>
        </div>
    )
}

export default Banner





