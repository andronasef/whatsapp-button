(function() {
  document.addEventListener('DOMContentLoaded', function() {
  const script = document.currentScript;
  const phone = script.getAttribute('data-phone') || '1234567890';
  const position = script.getAttribute('data-position') || 'bottom-right';
  const size = script.getAttribute('data-size') || '50';

  // Create the button element
  const whatsappButton = document.createElement('a');
  whatsappButton.href = `https://wa.me/${phone}`;
  whatsappButton.target = '_blank';
  whatsappButton.innerHTML = `
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="${size}" height="${size}">
  `;

  // Style the button
  whatsappButton.style.position = 'fixed';
  whatsappButton.style.zIndex = '1000';
  whatsappButton.style.cursor = 'pointer';
  whatsappButton.style.overflow = 'hidden';

  // Positioning
  if (position === 'bottom-right') {
    whatsappButton.style.bottom = '20px';
    whatsappButton.style.right = '20px';
  } else if (position === 'bottom-left') {
    whatsappButton.style.bottom = '20px';
    whatsappButton.style.left = '20px';
  } else if (position === 'top-right') {
    whatsappButton.style.top = '20px';
    whatsappButton.style.right = '20px';
  } else if (position === 'top-left') {
    whatsappButton.style.top = '20px';
    whatsappButton.style.left = '20px';
  }

  // Add the button to the body
  document.body.appendChild(whatsappButton);
});
})();
