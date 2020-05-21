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
            <Flex percentage="100%" align="flex-start" align_items="flex-start" mobile_align="center" wrap="wrap">
                <FlexCard percentage="20%" mobile="100%" align="flex-start" direction="column" onClick={() => navigate("/profile/1")}>
                    <ProfileImg percentage="70%" mobile="70%">
                        <Image src="/img/profile.jpg" />
                    </ProfileImg>
                    <Feedback>
                        <H2>
                            AliceMerveille
                        </H2>
                        <Stars stars_nb={4} />
                    </Feedback>
                </FlexCard>

                <FlexImgViewer percentage="80%" mobile="100%" align="space-between" align_items="flex-start" mobile_items="center" direction="column">
                    <Container>
                    <SRLWrapper callbacks={callbacks}>
                        <Row>
                            <Col>
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
                            </Col>
                        </Row>
                    </SRLWrapper>
                    </Container>
                </FlexImgViewer>           
            </Flex>
        </>
    )
};

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

const Col = Styled.div`
    flex: 0 0 100%;
    max-width: 100%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

const Row = Styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

const Container = Styled.div`
    width:100%;
    height:100%;
`;





const FlexCard = Styled(Flex)`
    &:hover{
        cursor:pointer;
    }
`;

const Feedback = Styled.div``;

const FlexImgViewer = Styled(Flex)`
    padding-left: 2.5%;
    border-left: 0.1px solid #bbb;
`;

const Image = Styled.img`
    width:100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const ProfileImg = Styled(Flex)`
    height: 12vw;

    @media (max-width: 768px) {
        height: 60vw;
    }
`;