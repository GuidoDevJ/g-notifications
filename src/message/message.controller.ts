/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    console.log(createMessageDto);
    return this.messageService.sendToEmail(createMessageDto);
  }
}
