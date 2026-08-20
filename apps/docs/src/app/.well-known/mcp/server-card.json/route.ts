import {
  MCP_PACKAGE_VERSION,
  NATIVE_MCP_API_URL,
  REACT_MCP_API_URL,
  absoluteUrl,
  getRequestOrigin,
  jsonResponse,
} from "@/lib/agent-discovery";

export const dynamic = "force-dynamic";
export const revalidate = false;

export async function GET(request: Request) {
  const origin = getRequestOrigin(request);

  return jsonResponse({
    $schema: "https://modelcontextprotocol.io/schemas/server-card/draft.json",
    capabilities: {
      prompts: false,
      resources: false,
      tools: true,
    },
    description:
      "PrismUI MCP servers expose read-only PrismUI React and PrismUI Native documentation, component metadata, source references, styles, and theme variables to AI coding agents.",
    endpoint: absoluteUrl(origin, "/.well-known/mcp/server-card.json"),
    links: {
      docs: [
        absoluteUrl(origin, "/docs/react/getting-started/mcp-server"),
        absoluteUrl(origin, "/docs/native/getting-started/mcp-server"),
      ],
      npm: [
        "https://www.npmjs.com/package/@khulnasoft/react-mcp",
        "https://www.npmjs.com/package/@khulnasoft/native-mcp",
      ],
      source: "https://github.com/khulnasoft/prismui-mcp",
    },
    notes:
      "The supported MCP transport today is stdio through the published npm packages. The endpoint field identifies this server card for browser and catalog discovery; it is not a Streamable HTTP MCP endpoint.",
    serverInfo: {
      name: "PrismUI MCP",
      version: MCP_PACKAGE_VERSION,
    },
    tools: [
      {
        description: "List all available PrismUI v3 React components.",
        name: "list_components",
        package: "@khulnasoft/react-mcp",
      },
      {
        description: "Get complete React component documentation.",
        name: "get_component_docs",
        package: "@khulnasoft/react-mcp",
      },
      {
        description: "Get React component TypeScript source code.",
        name: "get_component_source_code",
        package: "@khulnasoft/react-mcp",
      },
      {
        description: "Get React component CSS source styles.",
        name: "get_component_source_styles",
        package: "@khulnasoft/react-mcp",
      },
      {
        description: "Get PrismUI React theme variables.",
        name: "get_theme_variables",
        package: "@khulnasoft/react-mcp",
      },
      {
        description: "Browse full PrismUI React documentation.",
        name: "get_docs",
        package: "@khulnasoft/react-mcp",
      },
      {
        description: "List all available PrismUI Native components.",
        name: "list_components",
        package: "@khulnasoft/native-mcp",
      },
      {
        description: "Get complete Native component documentation.",
        name: "get_component_docs",
        package: "@khulnasoft/native-mcp",
      },
      {
        description: "Get PrismUI Native theme variables.",
        name: "get_theme_variables",
        package: "@khulnasoft/native-mcp",
      },
      {
        description: "Browse full PrismUI Native documentation.",
        name: "get_docs",
        package: "@khulnasoft/native-mcp",
      },
    ],
    transports: [
      {
        args: ["-y", "@khulnasoft/react-mcp@latest"],
        command: "npx",
        dataApi: REACT_MCP_API_URL,
        package: "@khulnasoft/react-mcp",
        type: "stdio",
      },
      {
        args: ["-y", "@khulnasoft/native-mcp@latest"],
        command: "npx",
        dataApi: NATIVE_MCP_API_URL,
        package: "@khulnasoft/native-mcp",
        type: "stdio",
      },
    ],
  });
}
