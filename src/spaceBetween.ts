import loopingText from "./loopingText";
import { configProps } from "./type.base";
export type contentProps = [string | number, string | number, string | number]
export type nextContentProps = [string | number, string, string | number, string, string | number]
export type provideNextContentProps = (content: contentProps) => nextContentProps
export type contentFuncProps = (content: contentProps, space_between: number, callbackContent:provideNextContentProps) => nextContentProps
const nextContents = (content: contentProps, _: number,callbackContent:provideNextContentProps): nextContentProps => callbackContent(content)
export default function spaceBetween(content: contentProps, { max_character, space_character, near_space_by_position = 0}: configProps, setNextContent: contentFuncProps = nextContents, position: "left" | "right" = "left") {
    const contentMapToLength = content.map((item: string | number) =>
      typeof item === "string" ? item.length : item.toString().length
    );
    const sumContentLength = contentMapToLength.reduce((a, b) => a + b, 0);
    const space_between = max_character - sumContentLength - near_space_by_position;
    const nextContent = [
      content[0],
      position === "left"
        ? loopingText(space_character, near_space_by_position)
        : loopingText(space_character, space_between),
      content[1],
      position === "right"
        ? loopingText(space_character, near_space_by_position)
        : loopingText(space_character, space_between),
      content[2]
    ];
    const setCallbackContent = ([leftContent, centerContent, rightContent]: contentProps): nextContentProps => {
        return [
            leftContent,
            position === "left"
            ? loopingText(space_character, near_space_by_position)
            : loopingText(space_character, space_between),
            centerContent,
            position === "right"
            ? loopingText(space_character, near_space_by_position)
            : loopingText(space_character, space_between),
            rightContent
        ]

    }
    return setNextContent([
        content[0],
        content[1],
        content[2]
      ], space_between, setCallbackContent).join("");
  }