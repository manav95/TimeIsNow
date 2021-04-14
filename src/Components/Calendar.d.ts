import { Component } from "react";
interface CalendarProps {
    title: string;
    dark: boolean;
    id: string;
}
interface CalendarState {
}
export default class Calendar extends Component<CalendarProps, CalendarState> {
    render(): JSX.Element;
}
export {};
