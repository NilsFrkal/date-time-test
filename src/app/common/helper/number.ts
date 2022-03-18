import * as _ from "lodash";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root", // <- ADD THIS
})
export class NumberHelper {
    constructor() { }

    round = (number, p) => {
        let multiplier = 100
        switch (p) {
            case 1:
                multiplier = 10
                break
            case 2:
                multiplier = 100
                break
            case 3:
                multiplier = 1000
                break
            case 4:
                multiplier = 10000
                break
            case 5:
                multiplier = 100000
                break
            case 6:
                multiplier = 1000000
                break
            case 7:
                multiplier = 10000000
                break
            case 8:
                multiplier = 100000000
                break
            case 9:
                multiplier = 1000000000
                break
            case 10:
                multiplier = 10000000000
                break
            default:
                multiplier = 100
        }
        return Math.round(number * multiplier) / multiplier
    }
}