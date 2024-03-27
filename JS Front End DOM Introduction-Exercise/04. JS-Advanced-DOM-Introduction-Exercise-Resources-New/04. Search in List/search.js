function search() {
   const townElement = document.getElementById('towns');
   const resultElement = document.getElementById('result');
   const search = document.getElementById('searchText').value;

   let counter = 0;
   const townElelementsearched = Array.from(townElement.children)
   for (const townEl of townElelementsearched){
      if(townEl.textContent.toLowerCase().includes(search.toLowerCase())){
         townEl.style.textDecoration = 'underline';
         townEl.style.fontWeight = 'bold';
         counter++;
      }
   }

   resultElement.textContent = `${counter} matches found`
}
