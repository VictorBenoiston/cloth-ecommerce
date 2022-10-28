import React from "react";
import { useNavigate } from "react-router-dom";

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'


const DirectoryItem = (props) => {
    const { title, subtitle, imageUrl } = props.category
    const navigate = useNavigate();

    const onNavigateHandler = () => 
        navigate(`shop/${title}`)
    

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage 
                imageUrl={imageUrl}></BackgroundImage>
            <Body>
                <h2>{title}</h2>
                <p>{subtitle || "Shop now!"}</p>

            </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;
