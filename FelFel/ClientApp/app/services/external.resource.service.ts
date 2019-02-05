import { Injectable } from "@angular/core";

@Injectable()
export class ExternalResourceService {
    constructor() {}

    loadScript(url: string, callback?: (response?: any) => any) {
        const node = document.createElement("script");
        node.src = url;
        node.type = "text/javascript";
        node.async = true;
        node.charset = "utf-8";
        document.getElementsByTagName("body")[0].appendChild(node);

        node.onload = (data: any) => {
            if (callback !== undefined) {
                callback();
            }
        };
    }

    loadStylesheet(url: string) {
        const node = document.createElement("link");
        node.href = url;
        node.type = "text/css";
        node.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(node);
    }
}