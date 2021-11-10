import { listenAndServe } from "https://deno.land/std@0.114.0/http/server.ts";

async function handleRequest() {
	const json = await getJson('./landscapes.json');
	const parsedJson = await JSON.stringify(json);
	return new Response(parsedJson, {
		headers: {
			"content-type": "application/json; charset=UTF-8",
			"Access-Control-Allow-Origin": "*"
		}
	});
}

async function getJson(filePath: string) {
	return JSON.parse(await Deno.readTextFile(filePath));
}

console.log("http://localhost:8000/");
listenAndServe(":8000", handleRequest);
