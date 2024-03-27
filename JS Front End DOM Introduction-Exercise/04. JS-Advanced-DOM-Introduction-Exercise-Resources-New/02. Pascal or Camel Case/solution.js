function solve() {
    const textElement = document.getElementById('text')
    const namingConvertion = document.getElementById('naming-convention') 
    const result = document.getElementById('result')

    const text = textElement.value
    const namingConvertionElement = namingConvertion.value
    
    const convertToPascal = (text) =>
      text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

    const convert = {
      'Pascal Case': convertToPascal,
      'Camel Case': (text) => convertToPascal(text).charAt(0).toLowerCase() + convertToPascal(text).slice(1)
    }

    if(!convert[namingConvertionElement]){
      result.textContent = 'Error!'
      return;
    }

    result.textContent = convert[namingConvertionElement](text);
}