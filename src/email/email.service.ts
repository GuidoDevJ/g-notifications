/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
type EmailMessage = {
  email: string;
  message: string;
  name: string;
};
@Injectable()
export class EmailNodeMailerService {
  constructor(private readonly nodemailerService: MailerService) {}
  async sendEmail(createMessage: EmailMessage) {
    const { email, message, name } = createMessage;
    try {
      const info = await this.nodemailerService.sendMail({
        from: email, // sender address
        to: 'guidogauna9@gmail.com', // list of receivers
        subject: name, // Subject line
        text: `${message}`, // plain text body
        html: `<b>${message} <br>${email}</b>`, // html body
      });
      return info;
    } catch (error) {
      console.log(error);
    }
  }
}
