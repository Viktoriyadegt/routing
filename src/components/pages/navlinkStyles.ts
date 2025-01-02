import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 20px;
    font-size: 35px;

    & > a {
        color: #0e3316;
        text-decoration: none;
    }

    & > a.active {
        color: rgba(121, 232, 122, 0.86);
        text-decoration: underline;
    }

    & > a:hover {
        color: rgba(182, 209, 176, 0.44);
    }
`

export const s =    {
    NavWrapper
}