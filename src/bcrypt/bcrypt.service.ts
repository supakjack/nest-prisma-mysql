import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
    async hash(password: string) {
        return await bcrypt.hash(password, await bcrypt.genSalt());
    }
    async compare(password: string, hashPassword: string) {
        return await bcrypt.compare(password, hashPassword);
    }
}
