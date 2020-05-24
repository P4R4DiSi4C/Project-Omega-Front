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
import H3 from '../../H3';
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
    nextArrow: <NextArrow />
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
            <Flex 
                w="100%" 
                a_items="flex-start" 
                j_content_mobile="center" 
                wrap>
                <FlexCard 
                    w="25%" 
                    w_mobile="100%"
                    j_content_mobile="space-between"
                    wrap 
                    onClick={() => navigate("/profile/1")}>
                    <UserBox 
                        w="80%" 
                        w_mobile="40%" 
                        d="column">
                        <ProfileImg src="/img/profile.jpg" />
                        <Username>
                            AliceMerveille
                        </Username>
                        <Stars stars_nb={4} />
                    </UserBox>
                    <ProductBox 
                        w="90%" 
                        w_mobile="50%" 
                        d="column">
                        <H3>250 CHF</H3>
                        <Divider />
                        <Item>
                            <Spec>
                                <SpecItem>TAILLE</SpecItem>
                                <SpecItem>S/52</SpecItem>
                            </Spec>
                            <Spec>
                                <SpecItem>MARQUE</SpecItem>
                                <SpecItem>Zara</SpecItem>
                            </Spec>
                            <Spec>
                                <SpecItem>ÉTAT</SpecItem>
                                <SpecItem>Très bon</SpecItem>
                            </Spec>
                            <Spec>
                                <SpecItem>VILLE</SpecItem>
                                <SpecItem>Lausanne</SpecItem>
                            </Spec>
                            <Spec>
                                <SpecItem>PAIEMENT</SpecItem>
                                <SpecItem>Twint</SpecItem>
                            </Spec>
                            <Spec>
                                <SpecItem>VUES</SpecItem>
                                <SpecItem>24</SpecItem>
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
            
                <FlexImgViewer 
                    w="75%" 
                    w_mobile="100%"
                    j_content="space-between" 
                    a_items="flex-start" 
                    j_content_mobile="center" 
                    a_items_mobile="center" 
                    d="column">
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

const Username = Styled.span`
    font-weight:lighter;
`;

const Desc = Styled.p`
    margin:0;
    font-weight:lighter;
    text-align:center;
    font-size:1rem;
`;

const Item = Styled.div`
    width:90%;
`;
const Spec = Styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`;

const SpecItem = Styled.span`
    font-weight:lighter;
`;

const Divider = Styled.hr`
    width: 90%;
    border: 0.1rem solid white;
    margin:0;
`;

const FlexCard = Styled(Flex)`
    border-right: 0.1px solid #bbb;
    background-color:rgba(241, 239, 239, 0.45);
    border-radius:1%;

    @media (max-width: 767.98px){
        margin-bottom:2rem;
        border-right:none;
    }
`;

const UserBox = Styled(Flex)`
    font-size:1.2rem;
`;

const ProductBox = Styled(Flex)`
    fonz-size:1rem;
`;

const ProfileImg = Styled.img`
    width:80%;
    height: 14vw;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    @media (max-width: 767.98px) {
        height: 28vw;
    }
`;

const Image = Styled.img`
    width:100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
`;

const FlexImgViewer = Styled(Flex)`

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
    height:auto;
    border: 2px solid;
`;

const ProductImg = Styled.div`
    height: 35vw;

    @media (max-width: 767.98px) {
        height: 45vw;
    }
`;

const Container = Styled.div`
    width:100%;
    height:100%;
`;
