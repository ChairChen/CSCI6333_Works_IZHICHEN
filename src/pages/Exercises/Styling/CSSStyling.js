import React from "react";
import style from "./button.module.css";
// import styled from "styled-components";
import styled from "@emotion/styled";
import { styled as StyledComponent } from "styled-components";

function StyledComponentButton() {
    const StyledComponentButton = StyledComponent.button`
        background-color: grey;
        color: black;
        &:hover {
            background-color: darkblue;
            color: white;
        }
    `;
    return (
        <StyledComponentButton>Click Me</StyledComponentButton>
    );
}

function EmotionButton() {
    const EmotionButton = styled.button`
        background-color: black;
        color: white;
        &:hover {
            background-color: white;
            color: black;
        }
    `;
    return (
        // <button css={EmotionButton}>Click Me</button>
        <EmotionButton>Click Me</EmotionButton>
    );
}

export default function CSSStyling() {
    const InlineButtonSytle = {
        backgroundColor: "red"
        ,color: "white"
        ,borderRadius: "10px"
    };

    return (
        <section>
            <h1>CSS Styling</h1>

            {/* Inline */}
            <h3>Inline Style</h3>
            <button style={InlineButtonSytle}>Click Me</button>

            {/* Module */}
            <h3>Module Style</h3>
            <button className={style.button}>Click Me</button>

            {/* Styled-components */}
            <h3>Styled-components Style</h3>
            <p>Define styled components as JavaScript components with encapsulated style</p>
            <StyledComponentButton />

            {/* Emotion(CSS-in-JS) */}
            <h3>Emotion(CSS-in-JS) Style</h3>
            <EmotionButton />
        </section>
    );
}