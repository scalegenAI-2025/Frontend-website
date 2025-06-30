// /// <reference types="vite/client" />

// interface ImportMetaEnv {
//   readonly VITE_GOOGLE_CLIENT_ID: string;
// }

// interface ImportMeta {
//   readonly env: ImportMetaEnv;
// }

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_API_BASE_URL: string;  // Add this line
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
