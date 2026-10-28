import { Button } from "./Button";
import type { DownloadItem } from "@/types/project";

interface DownloadButtonProps {
  item: DownloadItem;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
}

/**
 * Links to the file when it exists. Otherwise it sends the visitor to the
 * enquiry form, so we never link to a file that is not there.
 * To gate downloads behind the form later, change the href here only.
 */
export function DownloadButton({ item, variant = "secondary", className }: DownloadButtonProps) {
  if (item.url) {
    return (
      <Button href={item.url} download variant={variant} className={className}>
        {item.label}
      </Button>
    );
  }
  return (
    <Button href="#contact" variant={variant} className={className}>
      {item.label.replace(/^Download/, "Request")}
    </Button>
  );
}
