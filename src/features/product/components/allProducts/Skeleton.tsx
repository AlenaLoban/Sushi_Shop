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
    <rect x="6" y="5" rx="0" ry="0" width="255" height="174" />
    <rect x="18" y="189" rx="0" ry="0" width="233" height="21" />
    <rect x="17" y="214" rx="0" ry="0" width="234" height="72" />
    <rect x="105" y="299" rx="0" ry="0" width="35" height="24" />
    <rect x="142" y="345" rx="16" ry="16" width="106" height="37" />
    <rect x="24" y="359" rx="0" ry="0" width="80" height="22" />
    <rect x="171" y="299" rx="0" ry="0" width="35" height="24" />
    <rect x="32" y="299" rx="0" ry="0" width="35" height="24" />
  </ContentLoader>
);

export default Skeleton;
