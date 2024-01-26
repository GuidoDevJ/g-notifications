/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(private readonly emailService: EmailService) {}
  sendToEmail(createMessage: CreateMessageDto) {
    try {
      console.log('Hola entre aca');
      return this.emailService.sendEmail(createMessage);
    } catch (error) {
      return 'Hola soy el error';
    }
  }
}
