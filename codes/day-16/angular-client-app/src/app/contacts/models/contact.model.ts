export interface Contact {
    name: string;
    email: string;
    phone: number;
}
export interface ContactResponse {
    message: string;
    data: Contact[];
}