enum formatType {
  en = "en-UK",
}

export const formatNumber = (
  cell: number | null | undefined,
  options?: Intl.NumberFormatOptions
) => {
  if (cell !== null && cell !== undefined) {
    const formatOptions: Intl.NumberFormatOptions = {
      notation: "standard",
      ...options,
    };

    const i18Config = localStorage.getItem("i18nConfig");
    const locale: "en" = i18Config ? JSON.parse(i18Config)?.selectedLang : "sr";

    const formatter = new Intl.NumberFormat(
      formatType[locale] || formatType.en,
      formatOptions
    );
    return formatter.format(cell);
  }
  return "-";
};
