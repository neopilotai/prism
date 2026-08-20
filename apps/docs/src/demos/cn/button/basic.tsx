"use client";

import {Button} from "@prismui/react";

export function Basic() {
  return <Button onPress={() => console.log("按钮已按下")}>点我</Button>;
}
