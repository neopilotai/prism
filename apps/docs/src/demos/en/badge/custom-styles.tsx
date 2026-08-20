import {Avatar, Badge} from "@prismui/react";

export function CustomStyles() {
  return (
    <Badge.Anchor>
      <Avatar>
        <Avatar.Image
          alt="Kate Wilson"
          src="https://prismui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
        />
        <Avatar.Fallback>KW</Avatar.Fallback>
      </Avatar>
      <Badge className="min-w-5 font-semibold tabular-nums" color="accent" size="sm" variant="soft">
        5
      </Badge>
    </Badge.Anchor>
  );
}
