import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCartSkeleton from "./GameCartSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid
      spacing={6}
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCartSkeleton />
          </GameCardContainer>
        ))}

      {data?.results?.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
