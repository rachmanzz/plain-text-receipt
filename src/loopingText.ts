const loopingText = (text: string, count: number) => {
    let currentText= ""
    for (let i = 0; i < count; i++) {
        currentText += text
    }
    return currentText
}

export default loopingText