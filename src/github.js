$(document).ready(function () {
    const repositoryName = window.location.href.split('/')[4].trim().toUpperCase()
    const branchName = $('.commit-ref.css-truncate.user-select-contain.expandable.base-ref').text().trim()
    const pullRequestTitle = $('.gh-header-title').text().trim().replace(/\s+/g, ' ')
    const pullRequestURL = window.location.href

    let magicString = `${repositoryName} PR to '${branchName}'\n`
    magicString += `*${pullRequestTitle}*\n`
    magicString += `${pullRequestURL}`

    const button = $('<button/>')
        .text('Peer Review')
        .addClass('btn btn-sm')
        .css({
            'background-color': '#28a745',
            color: 'white',
            border: '1px solid #28a745',
            'border-radius': '6px',
            margin: '0px'
        })
        .on('click', () => {
            navigator.clipboard.writeText(magicString).then(function () {
                $.toast({
                    icon: 'success',
                    text: 'Copied to clipboard'
                })
            })
        })

    $('.gh-header-actions').append(button)
})
