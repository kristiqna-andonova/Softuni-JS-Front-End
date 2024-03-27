function colorize() {
    const evenRow = document.querySelectorAll('table tr:nth-child(2n)')
    for(const row of evenRow) {
        row.style.backgroundColor = 'teal'
    }
}