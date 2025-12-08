import { Injectable } from '@nestjs/common';
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
// import { PrismaClient } from 'generated/prisma';
// import { PrismaClient } from 'src/generated/prisma/client';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });
      
        super({adapter});
    }
    OnModuleInit() {
        async () => {
            await this.$connect();
        }
    }

}