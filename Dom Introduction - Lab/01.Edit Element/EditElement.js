function editElement(ref, match, replacement) {
    ref.textContent = ref.textContent.replace(new RegExp(match, 'g'), replacement);
}