import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

type FilterOption =
  | "Most Played"
  | "Highest Pool"
  | "Newest"
  | "Trending"
  | "Entry Fee"
  | "Sort By";

const Sort = () => {
  const [sortBy, setSortBy] = useState<string>("");

  const options: FilterOption[] = [
    "Sort By",
    "Most Played",
    "Highest Pool",
    "Newest",
    "Trending",
    "Entry Fee",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-11 rounded-lg">
          {sortBy === "" ? "Sort by" : sortBy}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-40">
        <DropdownMenuGroup>
          {options.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => setSortBy(option)}
              className={cn(sortBy === option && "bg-secondary")}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Sort;
