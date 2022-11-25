import dotenv from 'dotenv'

dotenv.config();

export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'educau-db',
    MONGO_USER: process.env.MONGO_USER || '',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || '',
    MONGO_HOST: process.env.MONGO_HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000
}