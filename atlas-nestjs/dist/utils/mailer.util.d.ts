export declare class MailerUtil {
    private transporter;
    constructor();
    sendMail(to: string, subject: string, text: string, html?: string): Promise<any>;
}
