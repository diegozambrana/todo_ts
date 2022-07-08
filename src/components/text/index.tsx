import styled, { css } from "styled-components";
import { COLOR } from "../../utils/theme";
import { Box } from "../Layout/Box";

export const Title = styled.h1`
    color: ${COLOR.dark};
`

interface TextProps {
    bold?: boolean;
}

export const Text = styled(Box)<TextProps>`
    color: ${COLOR.text};
    ${(props: any) => props.bold && css`
        font-weight: bold;
    `}
`