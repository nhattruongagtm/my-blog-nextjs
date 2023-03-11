import GoogleAd from "../../app/components/Ads/GoogleAd";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="text-xl text-white h-full bg-card-text-dark">
      Ads
      <GoogleAd
        googleAdId="ca-pub-5749665502208213"
        slot="2268403632"
        timeout={0}
      />
      <div className="mb-10"></div>
      <GoogleAd
        googleAdId="ca-pub-5749665502208213"
        slot="4766311139"
        timeout={0}
        format="fluid"
        layout="in-article"
      />
    </div>
  );
};

export default Blog;
