import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={4}
    width={270}
    height={400}
    viewBox="0 0 270 400"
    backgroundColor="#f2f2f2"
    foregroundColor="#ddcfcf"
  >
    <rect x="2" y="262" rx="0" ry="0" width="270" height="21" />
    <rect x="1" y="288" rx="0" ry="0" width="270" height="64" />
    <rect x="139" y="359" rx="16" ry="16" width="106" height="37" />
    <rect x="24" y="364" rx="0" ry="0" width="80" height="28" />
    <rect x="0" y="2" rx="0" ry="0" width="270" height="250" />
  </ContentLoader>
);

export default Skeleton;
