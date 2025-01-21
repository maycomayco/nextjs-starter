/* eslint-disable no-console */
import { createEnv } from '@t3-oss/env-nextjs';
import { ZodError, z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']),
  },
  // Called when the schema validation fails.
  onValidationError: (error: ZodError) => {
    console.error(
      '❌ Invalid environment variables:',
      error.flatten().fieldErrors
    );
    // we recommend exiting after logging the error
    process.exit(1);
  },
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
  // Treat empty strings as undefined.
  emptyStringAsUndefined: true,
});
