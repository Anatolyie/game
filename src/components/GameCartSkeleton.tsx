import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCartSkeleton() {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCartSkeleton;
