import { gamedayToInt, todayToString } from "kolmafia";
import { args } from "./args";


export const dontCS = gamedayToInt() === 78 || todayToString().includes("1030");
export const halloween = gamedayToInt() === 79 || todayToString().includes("1031");

export const garboType = args.hobo || args.crimbo || args.chrono || (halloween && args.halloween) ? "nobarf" : undefined;
