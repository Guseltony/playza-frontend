import type { Game } from "@/types/types";

export const sortData = <K extends keyof Game>(allGames: Game[], key: K) => {
  return [...allGames].sort((a, b) => (b[key] as number) - (a[key] as number));
};
