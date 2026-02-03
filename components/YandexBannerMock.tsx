import Script from "next/script";

export function YandexBannerMock() {
  return (
    <div className="w-full max-w-[900px] h-[250px] mx-auto bg-gray-100 border border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-sm">
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
    </div>
  );
}
