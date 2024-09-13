import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody fontSize="2xl">
          <Heading>{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
