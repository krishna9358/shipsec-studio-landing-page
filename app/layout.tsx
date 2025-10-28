"use client";

import './globals.css';
import { Space_Grotesk, Open_Sans, JetBrains_Mono } from 'next/font/google';
import { PageTransition } from '@/components/page-transition';
import { TransitionProvider } from '@/components/transition-provider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

const metadata = {
  title: 'ShipSecAI - OS for Modern Security Teams',
  description: 'Shipsec AI is your AI Security Copilot - a powerful no-code platform to build and deploy security automations. It comes with batteries included and supports all major security tools, cloud platforms, and a growing library of integrations.',
}

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${openSans.variable} ${jetbrainsMono.variable}`}>
        <TransitionProvider>
          <PageTransition>{children}</PageTransition>
        </TransitionProvider>
      </body>
    </html>
  );
}