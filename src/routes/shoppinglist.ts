import { IncomingMessage, ServerResponse } from "http";
import {
    addItem,
    getAllItems,
    getItem,
    deleteItem,
    updateItem,
} from "../controllers/shoppinglist.js";
import { title } from "process";

export const listRoute = async (
    request: IncomingMessage,
    response: ServerResponse,
) => {
    //Splitting the  Route
    if (request.url?.startsWith("/items")) {
        console.log(request.url, "request url");

        const parts = request.url.split("/");
        console.log(parts, "url parts");

        const id = parts[2] ? parseInt(parts[2]) : undefined;

        if (request.method === "GET" && !id) {
            response.writeHead(200, { "content-type": "application/json" });
            response.end(JSON.stringify(getAllItems()));
        }

        if (request.method === "GET" && id) {
            // Return an error if the id  provided is not a number
            if (isNaN(id)) {
                response.writeHead(400, { "content-type": "application/json" });
                response.end(JSON.stringify({ error: "Invalid item id" }));
                return;
            }
            const item = getItem(id);

            //Return an error if the  the are no items  found for the specific id you are looking for
            if (!item) {
                response.writeHead(404, { "content-type": "application/json" });
                response.end(JSON.stringify({ error: "Item not found" }));
                return;
            }
            //Return the song for the specified ID   if no errors are found.
            response.writeHead(200, { "content-type": "application/json" });
            response.end(JSON.stringify(item));
            return;
        }

        if (request.method === "POST") {
            //a container to store incoming data
            let body = "";
            request.on("data", (chunk) => {
                body += chunk.toString();
            });

            request.on("end", () => {
                try {
                    const data = JSON.parse(body);
                    if (!data.itemName || typeof data.itemName !== "string") {
                        response.writeHead(400, {
                            "content-type": "application-type",
                        });
                        response.end(
                            JSON.stringify({ error: "Item name is required" }),
                        );
                    }
                    if (!data.quantity || typeof data.quantity !== "number") {
                        response.writeHead(400, {
                            "content-type": "application-type",
                        });
                        response.end(
                            JSON.stringify({
                                error: "Quantity of items is required",
                            }),
                        );
                    }
                    if (!data.category || typeof data.category !== "string") {
                        response.writeHead(400, {
                            "content-type": "application-type",
                        });
                        response.end(
                            JSON.stringify({
                                error: "Item category is required",
                            }),
                        );
                    }

                    const newItem = addItem(
                        data.id,
                        data.itemName,
                        data.quantity,
                        data.category,
                    );
                    response.writeHead(201, {
                        "content-type": "application-type",
                    });
                    response.end(JSON.stringify(newItem));
                } catch (error) {}
            });
            return;
        }
        if (request.method === "DELETE" && id) {
            if (!isNaN) {
                response.writeHead(400, { "content-type": "application/json" });
                response.end(JSON.stringify({ error: "Invalid item id" }));
                return;
            }
            const item = getItem(id);

            if (!item) {
                response.writeHead(404, { "content-type": "application/json" });
                response.end(
                    JSON.stringify({
                        error: "The Item you want to delete is not found",
                    }),
                );
                return;
            }
            deleteItem(id);
            response.writeHead(200);
            response.end("Item deleted Sucessfully");
        }

        if (request.method === "PUT" && id) {
            if (isNaN(id)) {
                response.writeHead(400, { "content-type": "application/json" });
                response.end(JSON.stringify({ error: "Invalid item id" }));
                return;
            }

            let body = "";

            request.on("end", () => {
                try {
                    const { itemName, description, quantity, category } =
                        JSON.parse(body);
                    const updatedItem = updateItem(
                        id,
                        itemName,
                        description,
                        quantity,
                        category,
                    );

                    if (!updatedItem) {
                        response.writeHead(404, {
                            "content-type": "application/json",
                        });
                        response.end(
                            JSON.stringify({ error: "Item not found" }),
                        );
                        return;
                    }
                    response.writeHead(200, {
                        "content-type": "application/json",
                    });
                    response.end(JSON.stringify(updatedItem));
                } catch (eror) {
                    response.writeHead(400, {
                        "content-type": "application/json",
                    });
                    response.end(
                        JSON.stringify({ error: "Invalid JSON body" }),
                    );
                }
            });
            return;
        }
    }
};
