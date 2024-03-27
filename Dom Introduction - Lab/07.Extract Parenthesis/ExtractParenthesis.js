function extract(content) {
    const contentEl = document.getElementById(content);
    const maches = contentEl.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);
    const text = Array.from(maches).map(match => match[1]).join('; ');
    return text;
}