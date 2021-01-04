import generator from "./generator";
import { slogans } from "../consts";

/**
 * Generate slogans automatically.
 */
export default function generateSlogan(): string {
  return generator(slogans);
}
