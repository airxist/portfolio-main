import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e40ab1cf3d0e62a720595e8a5d9e8158@o4507612699164672.ingest.us.sentry.io/4507634116198400",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
});
