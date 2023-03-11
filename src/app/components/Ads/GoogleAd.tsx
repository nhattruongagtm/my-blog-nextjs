import { useEffect } from "react";

type GoogleAdProps = {
  timeout: number;
  googleAdId: string;
  slot: string;
  format?: string;
  style?: Record<string, string>;
  layout?: string;
};

const GoogleAd = ({
  timeout,
  googleAdId,
  slot,
  format,
  style,
  layout,
}: GoogleAdProps) => {
  useEffect(() => {
    let googleInit = setTimeout(() => {
      if (typeof window !== "undefined")
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        );
    }, timeout);

    return () => {
      clearTimeout(googleInit);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={style || { display: "block", textAlign: "center" }}
      data-ad-client={googleAdId}
      data-ad-slot={slot}
      data-ad-format={format || "auto"}
      data-full-width-responsive="true"
      data-ad-layout={layout}
    ></ins>
  );
};

export default GoogleAd;
