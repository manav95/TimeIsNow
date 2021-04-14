import { Component } from "react";
interface ContactFormProps {
    title: string;
    dark: boolean;
    id: string;
    onboardEnabled: boolean;
    onboard: () => void;
}
interface ContactFormState {
}
export default class ContactForm extends Component<ContactFormProps, ContactFormState> {
    render(): JSX.Element;
}
export {};
