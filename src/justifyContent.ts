import loopingText from "./loopingText";
import { configProps } from "./type.base";

export default function justifyContent(contents: [string | number, string | number][], { near_space_by_position = 0, max_character, space_character }: configProps, position: "left" | "right" = "left",) {
    const contentsMapLength = contents.map(([leftContent, rightContent]: [string | number, string | number]) => [
        typeof leftContent === "string"
            ? leftContent.length
            : leftContent.toString().length,
        typeof rightContent === "string"
            ? rightContent.length
            : rightContent.toString().length
    ]
    );
    if (position === "left") {
        const leftContentsLength = contentsMapLength.map(([leftContent]: number[]) => leftContent)

        const maxLeftContentLength = Math.max(...leftContentsLength);
        const maxWithAddingSpace = maxLeftContentLength + near_space_by_position;
        const nextContents = contents.map(([leftContent, rightContent]: [string | number, string | number]) =>
            leftContent === "[:divider]"
                ? loopingText(
                    typeof rightContent === "string"
                        ? rightContent
                        : rightContent.toString(),
                    max_character
                )
                : leftContent + loopingText(
                    space_character,
                    typeof leftContent === "string"
                        ? maxWithAddingSpace - leftContent.length
                        : maxWithAddingSpace - leftContent.toString().length
                ) + rightContent
        );
        return nextContents.join("\n")
    }
    const rightContentsLength = contentsMapLength.map(
        ([_, rightContent]: number[]) => rightContent
    );
    const maxRightContentLength = Math.max(...rightContentsLength);
    const maxWithAddingSpace = maxRightContentLength + near_space_by_position;
    const temporaryContents = contents.map(([leftContent, rightContent]: [string | number, string | number]) =>
            leftContent === "[:divider]"
                ? loopingText(
                    typeof rightContent === "string"
                        ? rightContent
                        : rightContent.toString(), max_character
                )
                : leftContent +
                loopingText(
                    space_character,
                    typeof rightContent === "string"
                        ? maxWithAddingSpace - rightContent.length
                        : maxWithAddingSpace - rightContent.toString().length
                ) +
                rightContent
    );
    const nextContents = temporaryContents.map(
        (contentItem: string) =>
            (max_character - contentItem.length >= 1
                ? loopingText(space_character, max_character - contentItem.length)
                : "") + contentItem
    );
    return nextContents.join("\n");
}