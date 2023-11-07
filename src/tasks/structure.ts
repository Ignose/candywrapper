import { Quest as BaseQuest, Task as BaseTask, Limit } from "grimoire-kolmafia";
import { myDaycount } from "kolmafia";
import { get } from "libram";

export type Task = BaseTask & {
  tracking?: string;
  limit?: Limit;
  clear?: "all" | "outfit" | "macro" | ("outfit" | "macro")[];
};
export type Quest = BaseQuest<Task>;

// eslint-disable-next-line no-restricted-syntax
export enum Leg {
  Aftercore = 0,
  CommunityService = 1,
  PostCS = 2
}

export function getCurrentLeg(): number {
  if (myDaycount() === 1 && !get("kingLiberated", false))
    return Leg.CommunityService;
  if (myDaycount() === 1 && get("kingLiberated", false))
    return Leg.PostCS;
  return Leg.Aftercore;
}
