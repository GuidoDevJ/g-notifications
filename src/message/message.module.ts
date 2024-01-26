/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { EmailModule } from 'src/email/email.module';

@Module({
  imports: [EmailModule],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
