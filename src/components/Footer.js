import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>30 BAR</h1>
                    
                    
                </FooterDesc>
                
               
                <FooterLinkItems>
                    <FooterLinkTitle>Объекты</FooterLinkTitle>
                    <FooterLink to="/PhotoVideo">Фото</FooterLink>
                    <FooterLink to="/PhotoVideo">Видео</FooterLink>
                    
            </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinkItems>
                    <FooterLinkTitle>Расширительные баки</FooterLinkTitle>
                    <FooterLink to="/Contact">Оплата</FooterLink>
                    <FooterLink to="/Contact">Доставка</FooterLink>
                    <FooterLink to="/Contact">Гарантии</FooterLink>
                </FooterLinkItems>
            
            <FooterLinkItems>
                    <FooterLinkTitle>Как с нами связаться</FooterLinkTitle>
                    <FooterLink to="/Contact">Контакты</FooterLink>
                    <FooterLink to="/Contact">Поддержка</FooterLink>
                    <FooterLink to="/">Оставить заявку</FooterLink>
                </FooterLinkItems>
           
                
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem ;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
    
`
const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinksWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }
`
const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;

    @media screen and (max-width: 400px) {
       font-size: 14px;
       margin-bottom: 6px;
       color: red;
    }
`
const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: 0.3s ease-out;
    }
    @media screen and (max-width: 400px) {
       font-size: 12px;
       margin-bottom: 6px;
    }
`
