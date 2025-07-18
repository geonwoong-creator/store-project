import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { NextIntlClientProvider } from "next-intl"
import koMessages from "../locales/ko.json"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-mode="light">
      <body>
        <NextIntlClientProvider locale="ko" messages={koMessages}>
          <main className="relative">{props.children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
