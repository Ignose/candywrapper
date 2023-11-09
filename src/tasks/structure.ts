import { Quest as BaseQuest, Task as BaseTask, Limit } from "grimoire-kolmafia";
import { myDaycount } from "kolmafia";

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
}

export function getCurrentLeg(): number {
  if (myDaycount() === 1)
    return Leg.CommunityService;
  return Leg.Aftercore;
}
