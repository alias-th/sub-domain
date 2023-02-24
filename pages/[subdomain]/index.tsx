import { useRouter } from "next/router";
import { FC } from "react";

interface Props {}

const SubDomain: FC<Props> = (props): JSX.Element => {
  const router = useRouter();
  const subdomain = router.query.subdomain;
  return (
    <div className="main">
      {subdomain} {`- page`}
    </div>
  );
};

export default SubDomain;
