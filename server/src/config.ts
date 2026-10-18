
import dotenv from 'dotenv';
dotenv.config();

export const config: Config = {
    port: Number(process.env.PORT) || 4000,
};

export interface Config {
    port: number;
}