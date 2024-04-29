try {
    const repositoryName = window.location.href.split('/')[4].trim().toUpperCase()
    const branchName = document.querySelector('.commit-ref.css-truncate.user-select-contain.expandable.base-ref').textContent.trim()
    const pullRequestTitle = document.querySelector('.gh-header-title').textContent.trim().replace(/\s+/g, ' ')
    const pullRequestURL = window.location.href

    let magicString = `${repositoryName} PR to '${branchName}'\n`
    magicString += `*${pullRequestTitle}*\n`
    magicString += `${pullRequestURL}`

    navigator.clipboard.writeText(magicString).then(() => {
        $.toast('Copied to clipboard!')
    })
} catch (error) {
    $.toast({
        heading: 'Error',
        text: error.message
    })
}
