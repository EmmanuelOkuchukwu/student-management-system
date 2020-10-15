import React from "react";
import {FooterStyled} from "../Styles/signin";

export default class Footer extends React.Component {
    render() {
        return(
            <div>
                <FooterStyled style={{}}>
                    <p>By Emmanuel Okuchukwu&copy; powered by Json Server and ReactJs {new Date().getFullYear()}</p>
                </FooterStyled>
            </div>
        );
    }
}
