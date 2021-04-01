import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";

const App = ({ Component, pageProps }) => (
  <>
    <DefaultSeo
      title="Reboot"
      description="Reboot As A Service"
      openGraph={{
        type: "website",
        locale: "en_US",
        url: "https://reboot.djiit.dev",
        site_name: "Reboot",
        images: [
          {
            url: "https://reboot.djiit.dev/summary.png",
            width: 1382,
            height: 728,
            alt: "Reboot",
          },
        ],
      }}
      twitter={{
        handle: "@Djiit",
        site: "@Djiit",
        cardType: "summary_large_image",
      }}
    />
    <Component {...pageProps} />
  </>
);

export default App;
