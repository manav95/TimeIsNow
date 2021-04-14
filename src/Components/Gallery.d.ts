import { Component } from "react";
interface GalleryProps {
    title: string;
    dark: boolean;
    id: string;
}
interface GalleryState {
}
export default class Gallery extends Component<GalleryProps, GalleryState> {
    render(): JSX.Element;
}
export {};
