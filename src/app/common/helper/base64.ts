import * as _ from "lodash";
import { Injectable } from "@angular/core";
const Buffer = require('buffer/').Buffer;

@Injectable({
    providedIn: "root", // <- ADD THIS
})

export class Base64Helper {
    constructor() { }

    base64Encode (object) {
        if (object) {
            if (Object.prototype.toString.call(object) === '[object String]') {
                return object;
            } else if (Object.prototype.toString.call(object) === '[object Array]') {
                object = Buffer.from(JSON.stringify(object)).toString('base64');
                return object;
            } else if (Object.prototype.toString.call(object) === '[object Object]') {
                object = Buffer.from(JSON.stringify(object)).toString('base64');
                return object;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    base64Decode (string) {
        if (string && string !== null) {
            let array = [];
            if (Object.prototype.toString.call(string) === '[object String]') {
                try {
                    let decoded = Buffer.from(string, 'base64').toString();
                    array = JSON.parse(decoded);
                    return array;
                } catch (e) {
                    return null;
                }
            } else if (Object.prototype.toString.call(string) === '[object Array]') {
                return string;
            } else if (Object.prototype.toString.call(string) === '[object Object]') {
                array = [string];
                return array;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
}