import { Component } from "react";
interface SectionProps {
    title: string;
    subtitle: string;
    dark: string;
    id: string;
}
interface SectionState {
}
export default class Section extends Component<SectionProps, SectionState> {
    render(): JSX.Element;
}
export {};
