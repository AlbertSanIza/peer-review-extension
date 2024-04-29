try {
    const repositoryName = window.location.href.split('/')[4].trim().toUpperCase()
    const branchName = document
        .evaluate(
            `/html/body/div[1]/div[6]/div/main/turbo-frame/div/div/div[3]/div[1]/div[3]/div[2]/span[2]/a/span`,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        )
        .singleNodeValue.textContent.trim()
        .toUpperCase()
    const pullRequestTitle = document.querySelector('.gh-header-title').textContent.trim().replace(/\s+/g, ' ')
    const pullRequestURL = window.location.href

    let magicString = `${repositoryName} PR to '${branchName}'\n`
    magicString += `*${pullRequestTitle}*\n`
    magicString += `${pullRequestURL}`

    console.log(magicString)
    navigator.clipboard.writeText(magicString)
} catch (error) {
    console.error(error)
}
