declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    API_KEY: string;
    HASH_SALT?: string;
    ALLOWED_ORIGINS?: string;
  }
}
