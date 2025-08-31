"use client";

import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("home");
  return <div>{t("This Is A Test")}</div>;
}
