import Script from "next/script";

export default function YandexBannerFloor() {
  return (
    <Script id="yandex-rtb-render" strategy="afterInteractive">
      {`
                window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
                "blockId": "R-A-18636919-4",
                "type": "floorAd",
                "platform": "touch"
            })
        })
        `}
    </Script>
  );
}
