"use client";

import {Button} from "@prismui/react";

export function RenderFunction() {
  return (
    <Button
      render={(props, {isPressed}) => (
        <button {...props} data-custom={isPressed ? "pressed" : "bar"} />
      )}
    >
      Press me
    </Button>
  );
}
