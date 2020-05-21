import React, { useRef } from 'react';

// libs
import Styled from 'styled-components';
import {navigate} from 'hookrouter';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SRLWrapper } from "simple-react-lightbox";

// components
import Flex from '../../Flex';
import H2 from '../../H2';
import H3 from '../../H3';
import H4 from '../../H4';
import Stars from '../../Profile/UserCard/stars';

// configs
// Settings for Slick
function PrevArrow(props) {
    const onClick = props.onClick;
    return (
      <SlideBtn
        onClick={onClick}
        color="#f7cc2f"
        className="hide_mobile"
      >
            <FontAwesomeIcon icon="chevron-left" size="lg"/>
      </SlideBtn>
    );
};
function NextArrow(props) {
    const onClick = props.onClick;
    return (
      <SlideBtn
        onClick={onClick}
        color="#f7cc2f"
        className="hide_mobile"
        style={{right:"0"}}
      >
            <FontAwesomeIcon icon="chevron-right" size="lg"/>
      </SlideBtn>
    );
};

const slickSettings = {
    dots: true,
    speed: 500,
    adaptiveHeight: true,
    infinite: false,
    draggable: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: 
    [{   
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
};

const options = {
    settings: {
        disablePanzoom: true,
        disableWheelControls: true,
        autoplaySpeed:0
    },
    buttons: {
        showDownloadButton:false,
        showThumbnailsButton:false
    }
  };


export default ({store_name}) => {
    const sliderRef = useRef();
   
    // Function to Sync the slide with Slick (Must be an arrow function)
    const syncSlide = index => {
        sliderRef.current.slickGoTo(index)
    };

    // Callback(s) to be passed to the SRLWrapper
    const callbacks = {
        onSlideChange: slide => syncSlide(slide.index)
    };

    
    return (
        <>
            <Flex percentage="100%" align_items="flex-start" mobile_align="center" wrap="wrap">
                <FlexCard percentage="25%" mobile="100%" mobile_align="space-between" mobile_items="flex-start" wrap="wrap" onClick={() => navigate("/profile/1")}>
                    <UserBox percentage="80%" mobile="40%" direction="column">
                        <ProfileImg>
                            <Image src="/img/profile.jpg" />
                        </ProfileImg>
                        <H2>
                            AliceMerveille
                        </H2>
                        <Stars stars_nb={4} />
                    </UserBox>
                    <ProductBox percentage="90%" mobile="50%" direction="column">
                        <H2>250 CHF</H2>
                        <Divider />
                        <Item>
                            <Spec>
                                <H4>TAILLE</H4>
                                <H4>S/52</H4>
                            </Spec>
                            <Spec>
                                <H4>MARQUE</H4>
                                <H4>Zara</H4>
                            </Spec>
                            <Spec>
                                <H4>ÉTAT</H4>
                                <H4>Très bon</H4>
                            </Spec>
                            <Spec>
                                <H4>VILLE</H4>
                                <H4>Lausanne</H4>
                            </Spec>
                            <Spec>
                                <H4>PAIEMENT</H4>
                                <H4>Twint</H4>
                            </Spec>
                            <Spec>
                                <H4>Vues</H4>
                                <H4>24</H4>
                            </Spec>
                        </Item>
                        <Divider />
                        <H3>Veston</H3>
                        <Item>
                            <Desc>
                                Veston en soie, acheté chez Zara et porté 5x.
                            </Desc>
                        </Item>
                    </ProductBox>
                </FlexCard>
            
                <FlexImgViewer percentage="75%" mobile="100%" align="space-between" align_items="flex-start" mobile_items="center" direction="column">
                    <Container>
                        <SRLWrapper options={options} callbacks={callbacks}>
                                <Slider ref={sliderRef} {...slickSettings}>
                                    <ProductImg>
                                    <Image
                                        src="/img/test.jpeg"
                                    />
                                    </ProductImg>
                                    <ProductImg>
                                    <Image
                                        src="/img/product1.jpg"
                                    />
                                    </ProductImg>
                                    <ProductImg>
                                    <Image
                                        src="/img/product1.jpg"
                                    />
                                    </ProductImg>
                                    <ProductImg>
                                    <Image
                                        src="/img/product1.jpg"
                                    />
                                    </ProductImg>
                                    <ProductImg>
                                    <Image
                                        src="/img/product1.jpg"
                                    />
                                    </ProductImg>
                                    <ProductImg>
                                    <Image
                                        src="/img/product1.jpg"
                                    />
                                    </ProductImg>
                                    <ProductImg>
                                    <Image
                                        src="/img/product2.jpg"
                                    />
                                    </ProductImg>
                                    <ProductImg>
                                    <Image
                                        src="/img/product3.jpg"
                                    />
                                    </ProductImg>
                                </Slider>
                        </SRLWrapper>
                    </Container>
                </FlexImgViewer>           
            </Flex>
        </>
    )
};

const Desc = Styled.p`
    margin:0;
    font-weight:lighter;
    text-align:center;
    font-size:1.1rem;
`;

const Item = Styled.div`
    width:90%;
`;
const Spec = Styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

const Divider = Styled.hr`
    width: 90%;
    border: 0.1rem solid white;
    margin:0;
`;

const FlexCard = Styled(Flex)`
    border-right: 0.1px solid #bbb;
    
    @media (max-width: 768px){
        margin-bottom:10%;
        border:none;
    }
`;

const UserBox = Styled(Flex)`

`;

const ProfileImg = Styled.div`
    height: 12vw;

    @media (max-width: 768px) {
        height: 40vw;
    }
`;

const ProductBox = Styled(Flex)`
    background-color:#d6d6d68c;
    border-radius:3%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;


const Image = Styled.img`
    width:100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const FlexImgViewer = Styled(Flex)`
    padding-left: 2.5%;
`;

const SlideBtn = Styled.button`
    position:absolute;
    top:50%;
    transform:translate(0,-50%);
    z-index:1;
    padding-left:2px;
    padding-right:2px;
    color:white;
    background-color:#f7cc2f;
    border:none;
    outline:none;
    cursor:pointer;
    height:10%;
    border: 2px solid;
`;

const ProductImg = Styled.div`
    height: 35vw;
    @media (max-width: 768px) {
        height: 120vw;
    }
`;

const Container = Styled.div`
    width:100%;
    height:100%;
`;
