import { Codejar } from "jsr:@pomdtr/smallweb-codejar@0.4.1";

const { SMALLWEB_DIR } = Deno.env.toObject();

const codejar = new Codejar(SMALLWEB_DIR);

export default codejar
