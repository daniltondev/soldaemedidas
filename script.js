document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('.valor-inicial');
    const button = document.querySelector('.submit');
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');
    document.body.appendChild(resultContainer);
    
    button.addEventListener('click', function() {
      resultContainer.innerHTML = ''; // Remove resultados anteriores
      
      const initialValue = parseFloat(input.value);
      
      if (!isNaN(initialValue)) {
        // Solda Forte
        const totalValueForte = initialValue / 0.7;
        const soldaValueForte = (totalValueForte * 0.3).toFixed(2);

        // Solda Média
        const totalValueMedia = initialValue / 0.65;
        const soldaValueMedia = (totalValueMedia * 0.35).toFixed(2);

        // Solda Fraca
        const totalValueFraca = initialValue / 0.6;
        const soldaValueFraca = (totalValueFraca * 0.4).toFixed(2);

        const resultElementForte = document.createElement('p');
        resultElementForte.textContent = `Solda Forte: ${soldaValueForte}g de Latão`;
        resultContainer.appendChild(resultElementForte);

        const resultElementMedia = document.createElement('p');
        resultElementMedia.textContent = `Solda Média: ${soldaValueMedia}g de Latão`;
        resultContainer.appendChild(resultElementMedia);

        const resultElementFraca = document.createElement('p');
        resultElementFraca.textContent = `Solda Fraca: ${soldaValueFraca}g de Latão`;
        resultContainer.appendChild(resultElementFraca);
      } else {
        alert('Por favor, insira um número válido.');
      }
    });
  });