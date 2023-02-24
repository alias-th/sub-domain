import { useRouter } from "next/router";
import { FC } from "react";

interface Props {}

const Jobs: FC<Props> = (props): JSX.Element => {
  const router = useRouter();
  const subdomain = router.query.subdomain;
  return (
    <div className="main">
      {subdomain} {`- jobs`}
    </div>
  );
};

export default Jobs;
