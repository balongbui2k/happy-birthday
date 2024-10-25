import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateFromMiddle = (
  fullStr = "",
  strLen = 10,
  middleStr = "..."
) => {
  if (fullStr.length <= strLen) return fullStr;
  const midLen = middleStr.length;
  const charsToShow = strLen - midLen;
  const frontChars = Math.ceil(charsToShow / 2);
  const backChars = Math.floor(charsToShow / 2);
  return (
    fullStr.substr(0, frontChars) +
    middleStr +
    fullStr.substr(fullStr.length - backChars)
  );
};