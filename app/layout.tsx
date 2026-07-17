export const metadata = {
  title: 'PromptForge Pro',
  description: 'Профессиональный генератор промптов для AI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
