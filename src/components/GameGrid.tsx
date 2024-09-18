import React from "react";
import { SimpleGrid, Text, Button, Box } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCartSkeleton from "./GameCartSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4];

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding="10px">
      <SimpleGrid spacing={6} columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCartSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button marginY={5} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
}

export default GameGrid;
