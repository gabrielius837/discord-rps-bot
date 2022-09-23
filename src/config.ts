import dotenv from 'dotenv';
dotenv.config()

type Key = 'TOKEN' | 'CHANNEL_ID' | 'CLIENT_URL' | 'HTTP_PROVIDER' | 'ADDRESS';

export type Config = {
    [key in Key]: string;
}

type Env = Partial<Config>

const getConfig = (): Env => {
    return {
        TOKEN: process.env.TOKEN,
        CHANNEL_ID: process.env.CHANNEL_ID,
        CLIENT_URL: process.env.CLIENT_URL,
        HTTP_PROVIDER: process.env.HTTP_PROVIDER,
        ADDRESS: process.env.ADDRESS
    }
}

const loadConfig = (): Config => {
    const errors: string[] = [];
    const env: Env = getConfig();
    const keys = Object.keys(env) as Key[];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = env[key];
        if (!value)
            errors.push(`Missing ${key} value`);
    }

    if (errors.length > 0)
        throw new Error(errors.join(' '));

    return { ...env } as Config;
}

const config = loadConfig();

export default config;