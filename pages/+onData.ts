import { PageContext } from "vike/types";

export { onData }

function onData(pageContext: PageContext & { data?: [{ text: string }] }) {
    console.log("1 +onData.ts")
}