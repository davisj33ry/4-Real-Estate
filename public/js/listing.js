const newHouseHandler = async (event) => {
    event.preventDefault();
  
    const address = document.querySelector('#address').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipCode = document.querySelector('#zip-code').value.trim();
    const price = document.querySelector('#price').value.trim();
  
    if (address && city && state && zipCode && price) {

      const response = await fetch(`/api/listing/new`, {

        method: 'POST',
        body: JSON.stringify({ address, city, state, zipCode, price}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create listing, try again');
      }
    }
  };
  
   
  document
    .querySelector('.new-house-submit')
    .addEventListener('click', newHouseHandler);
