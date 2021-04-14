import { Component } from "react";
interface MessageProps {
    title: string;
    subtitle: string;
    id: string;
}
interface MessageState {
}
export default class Message extends Component<MessageProps, MessageState> {
    render(): JSX.Element;
}
export {};
