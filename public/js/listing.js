// Store imagine url
let img_url ="";

const newHouseHandler = async (event) => {
    event.preventDefault();
  
    const address = document.querySelector('#address').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipCode = document.querySelector('#zip-code').value.trim();
    const price = document.querySelector('#price').value.trim();
  
    if (address && city && state && zipCode && price&&img_url) {

      const response = await fetch(`/api/listing/new`, {

        method: 'POST',
        body: JSON.stringify({ address, city, state, zipCode, price, img_url}),
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
  
  // Create Upload Widget
  var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dxrnczm82', 
    uploadPreset: 'imagine'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        img_url = result.info.secure_url;
      }
    }
  )
  
  
  document.getElementById("upload_widget").addEventListener("click", function(event){
    event.preventDefault();
      myWidget.open();
    }, false);
   
  document
    .querySelector('#new-house-submit')
    .addEventListener('click', newHouseHandler);
