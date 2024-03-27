function solve() {
  const outputElement = document.getElementById('output')
  const textareaElement = document.getElementById('input')
  const text = textareaElement.value

  const result = text
      .split('.').filter(sentance => !!sentance).reduce((result, sentance, i) => {
        const resultIndex =Math.floor(i/3);
        if(!result[resultIndex]){
          result[resultIndex] = []
        }
        result[resultIndex].push(sentance)

        return result;
      }, [])
      .map(sentance => `<p>${sentance.join('. ')}.</p>`)
      .join('\n');

      outputElement.innerHTML = result
      
}