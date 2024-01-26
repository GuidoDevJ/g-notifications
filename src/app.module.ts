import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { EmailModule } from './email/email.module';
import { ConfigModule } from './common/config.module';

@Module({
  imports: [MessageModule, EmailModule, ConfigModule],
})
export class AppModule {}
