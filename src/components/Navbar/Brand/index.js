import React from 'react'
import styled from "styled-components";


const Brand = () => {
  return (
    <Layout>
      <Image src={"/img/logo.png"} alt="Company Logo" />
    </Layout>
  )
}

export default Brand

const Layout = styled.div`
  display:flex;
  align-items:center;
  width:20%;
  justify-content:flex-start  ;
`;

const Image = styled.img`
    width:20%;
`;