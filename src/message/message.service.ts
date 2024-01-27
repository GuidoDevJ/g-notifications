/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { EmailNodeMailerService } from '../email/email.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly emailService: EmailNodeMailerService) {}
  sendToEmail(createMessage: CreateMessageDto) {
    try {
      return this.emailService.sendEmail(createMessage);
    } catch (error) {
      console.log(error);
      return 'Hola soy el error';
    }
  }
}
