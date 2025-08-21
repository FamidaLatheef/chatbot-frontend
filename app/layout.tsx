'use client';

import { NhostProvider } from '@nhost/nextjs';
import { nhost } from '../src/nhost';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NhostProvider nhost={nhost}>
          {children}
        </NhostProvider>
      </body>
    </html>
  );
}




