"use client"
import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { useTranslations } from "next-intl"

const Hero = () => {
  const t = useTranslations('hero')
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            {t('title')}
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            {t('subtitle')}
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="secondary">
            {t('github')}
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
