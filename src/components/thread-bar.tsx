import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronRight } from "lucide-react";

interface Props {
  count?: number;
  image?: string;
  timestamp?: number;
  onClick?: () => void;
}

export const ThreadBar = ({ count, image, onClick, timestamp }: Props) => {
  if (!count || !timestamp) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1 rounded-md hover:bg-white w-min border border-transparent hover:border-border flex items-center justify-start group/thread-bar transition max-w-[600px]"
    >
      <div className="flex items-center gap-2 overflow-hidden">
        <span className="text-xs text-sky-700 hover:underline font-bold truncate">
          {count} {count > 1 ? "replies" : "reply"}
        </span>
        <span className="text-[10px] text-muted-foreground truncate group-hover/thread-bar:block">
          Last reply {formatDistanceToNow(timestamp, { addSuffix: true })}
        </span>
      </div>
      <ChevronRight className="size-4 text-muted-foreground ml-auto opacity-0 group-hover/thread-bar:opacity-100 transition shrink-0" />
    </button>
  );
};
