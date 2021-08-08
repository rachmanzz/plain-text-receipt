import  spaceBetween, { contentFuncProps, contentProps }  from "@/spaceBetween"
import { configProps } from "@/type.base";
import loopingText from "@/loopingText";
import centerPosition from "./centerPosition";
import justifyContent from "./justifyContent";
export default function PlainReceipt (configs: configProps) {
    const convertString = (content: string[]|number[]) => content.length >= 1 ? content.join('\n') : ""
    // spaceBetween, loopingText, centerPosition, justifyContent, convertString
    return {
        loopingText: (text: string, count: number = configs.max_character) => loopingText(text, count),
        centerPosition: (content: string | number) => centerPosition(content, configs),
        justifyContent: (content: [string | number, string | number][], position?: "left" | "right") => justifyContent(content, configs, position),
        spaceBetween: (content: contentProps, option? : "left" | "right" | contentFuncProps, additional_option? : contentFuncProps) => {
            if (typeof option === 'function') return spaceBetween(content, configs, option)
            if (typeof additional_option !== 'undefined' && typeof option === 'string') return spaceBetween(content, configs, additional_option, option)
            return spaceBetween(content, configs)
        },
        convertString
    }
}