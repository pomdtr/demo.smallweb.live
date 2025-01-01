import { VSCode } from "jsr:@smallweb/vscode@0.1.7"

const vscode = new VSCode({
    rootDir: Deno.env.get("SMALLWEB_DIR"),
    readOnly: [
        "/.smallweb/*",
        "/vscode/*",
        "/cli/*",
        "/www/*",
        "/excalidraw/main.ts",
        "/smallblog/main.ts",
    ]
});

export default vscode;
