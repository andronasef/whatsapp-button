// WhatsApp Button Widget Script
(function(window) {
    // Default configuration
    const defaultConfig = {
        phone: '',                // WhatsApp number
        position: 'right',        // 'right' or 'left'
        bottomOffset: '40px',     // Distance from bottom
        sideOffset: '40px',       // Distance from side
        size: '60px',            // Button size
        backgroundColor: '#25d366', // WhatsApp green
        hoverColor: '#128C7E',    // Darker green for hover
        showAfterScroll: 100,     // Show after scrolling this many pixels
        zIndex: 100,             // z-index value
        text: '',                // Optional text/icon HTML
    };

    // Create and initialize WhatsApp button
    window.WhatsAppButton = {
        init: function(userConfig) {
            // Merge user config with defaults
            const config = { ...defaultConfig, ...userConfig };
            
            // Validate phone number
            if (!config.phone) {
                console.error('WhatsApp Button: Phone number is required');
                return;
            }

            // Create button element
            const button = document.createElement('a');
            button.href = `https://wa.me/${config.phone}`;
            button.target = '_blank';
            button.innerHTML = config.text;
            
            // Set inline styles
            Object.assign(button.style, {
                position: 'fixed',
                width: config.size,
                height: config.size,
                bottom: config.bottomOffset,
                [config.position]: config.sideOffset,
                backgroundColor: config.backgroundColor,
                color: '#FFF',
                borderRadius: '50%',
                textAlign: 'center',
                fontSize: '30px',
                boxShadow: '2px 2px 3px #999',
                zIndex: config.zIndex,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                opacity: '0',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer'
            });

            // Add to page
            document.body.appendChild(button);

            // Scroll visibility handler
            const toggleVisibility = () => {
                button.style.opacity = window.scrollY > config.showAfterScroll ? '1' : '0';
            };

            // Add event listeners
            window.addEventListener('scroll', toggleVisibility);
            button.addEventListener('mouseover', () => {
                button.style.backgroundColor = config.hoverColor;
            });
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = config.backgroundColor;
            });

            // Initial visibility check
            toggleVisibility();
        }
    };
})(window);
