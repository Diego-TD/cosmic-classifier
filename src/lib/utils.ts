import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CLASS_LABELS: Record<string, string> = {
  GALAXY: "Galaxy",
  STAR: "Star",
  QSO: "Quasar (QSO)",
}
export const CLASS_SPRITES: Record<string, string> = {
  GALAXY: "/galaxy.png",
  STAR: "/star.png",
  QSO: "/quasar.png",
}
