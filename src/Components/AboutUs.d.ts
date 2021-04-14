import 'pure-react-carousel/dist/react-carousel.es.css';
import { Component } from "react";
interface AboutUsProps {
    id: string;
    title: string;
    onboard: () => void;
}
interface AboutUsState {
    onboardEnabled: boolean;
}
export default class AboutUs extends Component<AboutUsProps, AboutUsState> {
    onboard: () => void;
    constructor(props: AboutUsProps);
    render(): JSX.Element;
}
export {};
