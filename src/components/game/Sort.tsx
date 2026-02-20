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
  | "Filter By"
  | "Hottest";

const Sort = () => {
  const [filterBy, setFilterBy] = useState<string>("");

  const options: FilterOption[] = [
    "Filter By",
    "Most Played",
    "Highest Pool",
    "Newest",
    "Hottest",
    "Trending",
    "Entry Fee",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn(filterBy && filterBy !== "Filter By" && "bg-secondary", `h-11 rounded-lg`)}
        >
          {filterBy === "" ? "filter by" : filterBy}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="w-40">
        <DropdownMenuGroup>
          {options.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => setFilterBy(option)}
              className={cn(filterBy === option && "bg-secondary")}
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
