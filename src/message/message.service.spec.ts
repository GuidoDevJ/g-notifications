/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { EmailService } from '../email/email.service';

describe('MessageService', () => {
  let service: MessageService;
  let emailService;
  // let nodeMailerService: MailerService;
  emailService = {
    sendEmail: jest.fn(() => Promise.resolve('Mensaje enviado')),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService, EmailService],
    })
      .overrideProvider(EmailService)
      .useValue(emailService)
      .compile();

    service = module.get<MessageService>(MessageService);
    emailService = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should send the email', async () => {
    const createMessage = {
      email: 'XXXXXXXXXXXXXXXXXXXXX',
      message: 'Hola soy un mensaje',
      name: 'Guido Gauna',
    };
    const result = await service.sendToEmail(createMessage);
    expect(result).toEqual('Mensaje enviado');
  });
});
