"use client"
import { ArrowUpRightMini } from "@medusajs/icons"
import { Text } from "@medusajs/ui"
import { Metadata } from "next"
import Link from "next/link"
import { useTranslations } from "next-intl"

export const metadata: Metadata = {
  title: "404",
  description: "Something went wrong",
}

export default function NotFound() {
  const t = useTranslations('notFound')
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">{t('title')}</h1>
      <p className="text-small-regular text-ui-fg-base">
        {t('description')}
      </p>
      <Link
        className="flex gap-x-1 items-center group"
        href="/"
      >
        <Text className="text-ui-fg-interactive">{t('frontpage')}</Text>
        <ArrowUpRightMini
          className="group-hover:rotate-45 ease-in-out duration-150"
          color="var(--fg-interactive)"
        />
      </Link>
    </div>
  )
}
