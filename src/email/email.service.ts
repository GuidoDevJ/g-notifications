/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
type EmailMessage = {
  email: string;
  message: string;
  name: string;
};
@Injectable()
export class EmailService {
  constructor(private readonly nodemailerService: MailerService) {}
  async sendEmail(createMessage: EmailMessage) {
    console.log('LLegue al Email Send Email');
    const { email, message, name } = createMessage;
    try {
      const info = await this.nodemailerService.sendMail({
        from: email, // sender address
        to: 'guidogauna9@gmail.com', // list of receivers
        subject: name, // Subject line
        text: `${message}`, // plain text body
        html: `<b>${message}</b>`, // html body
      });
      return info;
    } catch (error) {
      console.log(error);
    }
  }
}
