let str = "I live for my cruasede"

function removeLetter(str, [e1, e2]) {
     let firstResult = str.replaceAll(e1, "")
     let secondResult = firstResult.replaceAll(e2, "")
     console.log(secondResult)
}

removeLetter(str,["for","e"])