import { Button } from "@/components/ui/button";
import { LiaDownloadSolid } from "react-icons/lia";

export function ButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <LiaDownloadSolid className="h-4 w-4" />
    </Button>
  );
}
