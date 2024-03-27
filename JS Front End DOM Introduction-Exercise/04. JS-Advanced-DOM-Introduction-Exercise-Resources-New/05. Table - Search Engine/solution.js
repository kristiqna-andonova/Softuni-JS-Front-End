function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('table.container tbody tr');
      const searchFieldElement = document.getElementById('searchField');
      const search = searchFieldElement.value

      for (const trElement of trElements) {
         const tdElemensts = trElement.querySelectorAll('td')
         let isSelect = false

         for (const tdElement of tdElemensts) {
            if (tdElement.textContent.includes(search)){
               isSelect = true
               break;
            }
         }

         if (isSelect){
            trElement.className = 'select';
         }

      }
      searchFieldElement.value = '';
   }
}