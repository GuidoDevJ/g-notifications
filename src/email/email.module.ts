/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmailNodeMailerService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from 'src/common/config.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD_GOOGLE,
        },
      },
    }),
    ConfigModule,
  ],
  controllers: [],
  providers: [EmailNodeMailerService],
  exports: [EmailNodeMailerService],
})
export class EmailModule {}
