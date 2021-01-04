import generator from "./generator";
import { complainPlaceholders } from "../consts";

/**
 * Generate complain placeholders.
 */
export default function generateComplainPlaceholders(): string {
  return generator(complainPlaceholders);
}
