import styled, { css } from "styled-components";

interface BoxType {
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    m?: number;
    mx?: number;
    my?: number;

    pt?: number;
    pb?: number;
    pl?: number;
    pr?: number;
    p?: number;
    px?: number;
    py?: number;
}

const getMarginAndPadding = (props: BoxType) => {
    return css`
        margin-top: ${ props.mt || props.my || props.m || 0}rem;
        margin-right: ${ props.mr || props.mx || props.m || 0}rem;
        margin-bottom: ${ props.mb || props.my || props.m || 0}rem;
        margin-left: ${ props.ml || props.mx || props.m || 0}rem;
        padding-top: ${ props.pt || props.py || props.p || 0}rem;
        padding-right: ${ props.pr || props.px || props.p || 0}rem;
        padding-bottom: ${ props.pb || props.py || props.p || 0}rem;
        padding-left: ${ props.pl || props.px || props.p || 0}rem;
    `
}

export const Box = styled.div<BoxType>`
    ${getMarginAndPadding}
`