import { VSCode } from "jsr:@smallweb/vscode@0.1.4"

const vscode = new VSCode({
    rootDir: Deno.env.get("SMALLWEB_DIR"),
    readOnly: [
        "/.smallweb/*",
        "/editor/*",
        "/cli/*",
        "/www/*",
    ]
});

export default vscode;
