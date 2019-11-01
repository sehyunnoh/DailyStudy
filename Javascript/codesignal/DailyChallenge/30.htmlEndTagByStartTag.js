function htmlEndTagByStartTag(startTag) {
    return '</'+startTag.match(/^<\w*/)[0].substring(1)+'>';
}


let str = "<button type='button' disabled>";

console.log(htmlEndTagByStartTag(str));