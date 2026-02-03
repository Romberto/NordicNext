import Script from "next/script";

export default function YandexBanner() {
  return (
    <>
      <div id="yandex_rtb_R-A-18636919-1"></div>
      <Script id="yandex-rtb-render" strategy="afterInteractive">
        {`
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              "blockId": "R-A-18636919-1",
              "renderTo": "yandex_rtb_R-A-18636919-1"
            });
          });
        `}
      </Script>
    </>
  );
}
