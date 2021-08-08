import loopingText from "./loopingText";
import { configProps } from "./type.base";

export default function centerPosition(content: string | number, {max_character, space_character}: configProps): string {
    const contentLength = typeof content === "string" ? content.length : content.toString().length
    const lengthResidual = max_character - contentLength;
    if (lengthResidual <= 1) return typeof content === 'string' ? content : content.toString();
    const modulus = lengthResidual % 2;
    const half = (lengthResidual - modulus) / 2;
    return [loopingText(space_character, half), content].join("");
}