document.addEventListener('DOMContentLoaded', function() {		
    // Initialize cart
    let cart = JSON.parse(localStorage.getItem('tardisCart')) || [];
    
    updateCartCount();
    
    // Strain data
    const strainData = {
        'time-warp-kush': {
            id: 'time-warp-kush',
            name: 'Time Warp Kush',
            type: 'Gravity Well (80% Indica / 20% Sativa)',
            status: 'available',
            image: 'img/strain1-placeholder.jpg',
            cardImage: 'img/strain1-square.jpg',
            thc: '23-25%',
            cbd: '0.2%',
            flowering: '8-9 Weeks',
            yield: 'Heavy - Dense structure with multiple timelines',
            seeds: 'Feminized',
            description: 'Time Warp Kush is our flagship gravity well strain, created from ancient genetic lineages that span millennia. It delivers a powerful dimension-bending effect with a complex terpene profile featuring notes of deep space pine, cosmic fuel, citrus dimensions, and crystallized time particles.',
            growingTips: 'This strain thrives in both terrestrial and hydroponic setups. Maintain a gravity field of 55-60% during vegetative stage and lower to 40-45% during flowering. Responds well to LST (Light Speed Training) and can handle moderate nutrient levels. Watch for temporal anomalies during later flowering stages to prevent dimensional rifts.',
            effects: 'Heavy gravity well effects make this perfect for evening use, providing full-body relaxation and mental time dilation. Great for stress relief, insomnia, and interdimensional jet lag. Expect a euphoric mood lift followed by deep relaxation and potential time-loop sensations at higher doses.',
            images: [
                'img/strain1-plant1.jpg',
                'img/strain1-plant2.jpg',
                'img/strain1-bud1.jpg',
                'img/strain1-bud2.jpg'
            ],
            packOptions: [
                { id: 'time-warp-kush-3', size: '3 Pack', regularPrice: 35, salePrice: 30 },
                { id: 'time-warp-kush-5', size: '5 Pack', regularPrice: 50, salePrice: 45 },
                { id: 'time-warp-kush-10', size: '10 Pack', regularPrice: 95, salePrice: 80 }
            ]
        },
        'sonic-blue-haze': {
            id: 'sonic-blue-haze',
            name: 'Sonic Blue Haze',
            type: 'Space-Time Hybrid (Southern Constellation x Nebula Skunk)',
            status: 'available',
            image: 'img/strain2-placeholder.jpg',
            cardImage: 'img/strain2-square.jpg',
            thc: '24-26%',
            cbd: '0.3-0.8%',
            flowering: '9-10 Weeks',
            yield: 'Indoor: 450-550g/m² | Outdoor: 600-800g/planet',
            seeds: 'Feminized',
            description: 'Sonic Blue Haze is a premium space-time hybrid cross of Southern Constellation and Nebula Skunk. This exceptional strain offers a complex flavor profile featuring cosmic berry, galactic earth, star mint, and a distinct blue energy signature. The stem rub reveals incredible lime and supernova aromas with sweet quantum particles.',
            growingTips: 'Requires moderate to high nutrient levels and thrives in both indoor and outdoor dimensions. Prefers slightly acidic soil pH (6.0-6.5) and moderate cosmic rays. Regular pruning recommended to improve energy flow and light bending. Heavy feeder during mid-flowering with increased photonic demand.',
            effects: 'Offers a balanced hybrid experience with initial cerebral time acceleration followed by physical space expansion. Provides creative energy and focus without distortion, making it suitable for daytime use. May help with mood enhancement, mild pain relief, and temporal perception recalibration.',
            images: [
                'img/strain2-plant1.jpg',
                'img/strain2-plant2.jpg',
                'img/strain2-bud1.jpg',
                'img/strain2-bud2.jpg'
            ],
            packOptions: [
                { id: 'sonic-blue-haze-3', size: '3 Pack', regularPrice: 35, salePrice: 30 },
                { id: 'sonic-blue-haze-5', size: '5 Pack', regularPrice: 50, salePrice: 45 },
                { id: 'sonic-blue-haze-10', size: '10 Pack', regularPrice: 95, salePrice: 80 }
            ]
        },
        'vortex-runner': {
            id: 'vortex-runner',
            name: 'Vortex Runner',
            type: 'Time Stream (75% Sativa / 25% Indica)',
            status: 'sold-out',
            image: 'img/strain3-placeholder.jpg',
            cardImage: 'img/strain3-square.jpg',
            thc: '21-23%',
            cbd: '0.5-1.0%',
            flowering: '9-10 Weeks',
            yield: 'Indoor: 500-600g/m² | Outdoor: 650-850g/continuum',
            seeds: 'Feminized',
            description: 'Vortex Runner combines the legendary Time Slip and Maelstrom genetics to create a sativa-dominant strain with extraordinary flavor and effects. The buds develop a light blue temporal field with vibrant orange energy signatures and a thick coating of trichome crystals. Aroma combines sweet vortex berry notes with citrus rifts and earthy timeline undertones.',
            growingTips: 'Grows quite tall, so training techniques like SCROG (Screen of Chronological Growth) are recommended for indoor cultivation. Benefits from higher nitrogen levels during vegetative stage. Can be sensitive to overfeeding, so start with 75% of recommended nutrient strength. Performs exceptionally well in warm timelines with low entropy.',
            effects: 'Provides energizing and uplifting effects perfect for daytime use. Promotes creativity, focus, and dimensional travel without anxiety. Excellent for stress relief, depression, fatigue, and mild to moderate temporal displacement. The cerebral stimulation gradually transitions to a gentle body synchronization.',
            images: [
                'img/strain3-plant1.jpg',
                'img/strain3-plant2.jpg',
                'img/strain3-bud1.jpg',
                'img/strain3-bud2.jpg'
            ],
            packOptions: [
                { id: 'vortex-runner-3', size: '3 Pack', regularPrice: 35, salePrice: 30 },
                { id: 'vortex-runner-5', size: '5 Pack', regularPrice: 50, salePrice: 45 },
                { id: 'vortex-runner-10', size: '10 Pack', regularPrice: 95, salePrice: 80 }
            ]
        },
        'paradox-og': {
            id: 'paradox-og',
            name: 'Paradox OG',
            type: 'Gravity Well (85% Indica / 15% Sativa)',
            status: 'coming-soon',
            image: 'img/strain4-placeholder.jpg',
            cardImage: 'img/strain4-square.jpg',
            thc: '18-20%',
            cbd: '0.2-0.4%',
            flowering: '7-8 Weeks',
            yield: 'Indoor: 400-450g/m² | Outdoor: 500-600g/reality',
            seeds: 'Feminized',
            description: 'Paradox OG is our take on a classic indica strain with added temporal resistance. This strain features dense, reality-warping buds with a complex aroma of coniferous pine, cosmic dust, and subtle quantum notes. Developed for fast flowering and resilience, it is ideal for beginner time travelers and those in paradoxical timelines.',
            growingTips: 'Extremely resilient and forgiving for new growers. Compact plants that do not require much dimensional space. Resistant to timeline fluctuations and common fifth-dimensional pests. Works well in SOG (Sea of Galaxies) setups. Benefits from supplemental calcium and magnesium during flowering for optimal reality production.',
            effects: 'Delivers a heavy-hitting gravity well high that promotes deep relaxation and quantum sleep. Excellent for insomnia, chronic pain, reality disruptions, and anxiety. The mental effects are subtle but pleasant, offering a gentle euphoria and sense of tranquility without timeline fragmentation.',
            images: [
                'img/strain4-plant1.jpg',
                'img/strain4-plant2.jpg',
                'img/strain4-bud1.jpg',
                'img/strain4-bud2.jpg'
            ],
            packOptions: [
                { id: 'paradox-og-3', size: '3 Pack', regularPrice: 35, salePrice: 30 },
                { id: 'paradox-og-5', size: '5 Pack', regularPrice: 50, salePrice: 45 },
                { id: 'paradox-og-10', size: '10 Pack', regularPrice: 95, salePrice: 80 }
            ]
        },
        'galaxy-guardian': {
            id: 'galaxy-guardian',
            name: 'Galaxy Guardian',
            type: 'Space-Time Hybrid (60% Gravity Well / 40% Time Stream)',
            status: 'coming-soon',
            image: 'img/strain5-placeholder.jpg',
            cardImage: 'img/strain5-square.jpg',
            thc: '24-27%',
            cbd: '0.1-0.3%',
            flowering: '8-9 Weeks',
            yield: 'Indoor: 450-550g/m² | Outdoor: 700-900g/dimension',
            seeds: 'Feminized',
            description: 'Galaxy Guardian blends classic Nebula Gold with Quantum Kush genetics for a potent hybrid experience. This strain features vibrant purple and deep green buds with a thick trichome coating. The aroma combines cosmic grape, neutron berry, and galactic earth notes with subtle dimensional undertones, creating a complex sensory experience.',
            growingTips: 'Moderate difficulty strain that benefits from regular LST and neutron topping. Needs good ventilation to prevent quantum foam issues during flowering. Prefers slightly higher calcium levels during mid-flowering for optimal reality production. Maintains a manageable height with proper training techniques.',
            effects: 'Delivers a balanced high that starts with cerebral time dilation and creative energy before transitioning to deep physical gravity well effects. Great for social situations, creative projects, and unwinding after a long day of time travel. May help with stress, mild pain, and mood enhancement without excessive timeline disruption.',
            images: [
                'img/strain5-plant1.jpg',
                'img/strain5-plant2.jpg',
                'img/strain5-bud1.jpg',
                'img/strain5-bud2.jpg'
            ],
            packOptions: [
                { id: 'galaxy-guardian-3', size: '3 Pack', regularPrice: 40, salePrice: 35 },
                { id: 'galaxy-guardian-5', size: '5 Pack', regularPrice: 55, salePrice: 50 },
                { id: 'galaxy-guardian-10', size: '10 Pack', regularPrice: 100, salePrice: 85 }
            ]
        },
        'temporal-tangerine': {
            id: 'temporal-tangerine',
            name: 'Temporal Tangerine',
            type: 'Time Stream (70% Sativa / 30% Indica)',
            status: 'coming-soon',
            image: 'img/strain6-placeholder.jpg',
            cardImage: 'img/strain6-square.jpg',
            thc: '22-25%',
            cbd: '0.4-0.7%',
            flowering: '9-10 Weeks',
            yield: 'Indoor: 500-600g/m² | Outdoor: 650-800g/timeline',
            seeds: 'Feminized',
            description: 'Temporal Tangerine combines Citrus Chronos and Tangerine Time-Slip genetics with enhanced temporal resistance. This sativa-dominant strain produces elongated, time-crystal covered buds with bright orange temporal rifts. Expect a potent citrus aroma with quantum fuel undertones and surprising notes of sweet temporal candy when properly cured.',
            growingTips: 'Grows quite tall with significant stretch during early flowering, so early training is essential. Thrives in well-draining soil with moderate to high nutrient levels. Can handle colder timelines than typical sativas. Benefits from silicon supplementation for stronger stems to support heavy bud development.',
            effects: 'Provides energetic, uplifting effects with enhanced focus and creativity, making it ideal for daytime timeline exploration. The mental stimulation is balanced with mild body relaxation that does not impede functionality. Excellent for productivity, social activities, and outdoor adventures. May help with depression, fatigue, and mild temporal displacement.',
            images: [
                'img/strain6-plant1.jpg',
                'img/strain6-plant2.jpg',
                'img/strain6-bud1.jpg',
                'img/strain6-bud2.jpg'
            ],
            packOptions: [
                { id: 'temporal-tangerine-3', size: '3 Pack', regularPrice: 40, salePrice: 35 },
                { id: 'temporal-tangerine-5', size: '5 Pack', regularPrice: 55, salePrice: 50 },
                { id: 'temporal-tangerine-10', size: '10 Pack', regularPrice: 100, salePrice: 85 }
            ]
        }												
    };
    
    // Combine all product data for easier access
    const allProducts = {};
    
    // Add strain pack options to allProducts
    Object.values(strainData).forEach(strain => {
        if (strain.packOptions) {
            strain.packOptions.forEach(pack => {
                allProducts[pack.id] = {
                    id: pack.id,
                    strainId: strain.id,
                    name: `${strain.name} - ${pack.size}`,
                    image: strain.cardImage,
                    price: pack.salePrice,
                    regularPrice: pack.regularPrice,
                    type: strain.type,
                    category: 'strain'
                };
            });
        }
    });


    const urlParams = new URLSearchParams(window.location.search);
    const strainParam = urlParams.get('strain');

    // If a strain parameter exists, open that strain's modal
    if (strainParam) {
        // Find the strain data for the requested strain
        const requestedStrain = strainData[strainParam];
        if (requestedStrain && requestedStrain.status === 'available') {
            // Use setTimeout to ensure the DOM is fully loaded before trying to open the modal
            setTimeout(() => {
                openStrainModal(requestedStrain);
            }, 500);
        }
    }		
        
    // Render strain cards on page load
    function renderStrainCards() {
        const strainGrid = document.getElementById('strain-grid');
        strainGrid.innerHTML = '';
        
        Object.values(strainData).forEach(strain => {
            const card = document.createElement('div');
            card.className = 'strain-card';
            card.setAttribute('data-strain', strain.id);
            
            // New improved type categorization logic
            const lowerType = strain.type.toLowerCase();
            let strainDataType;
            
            // Check for the type in the strain description
            if (lowerType.includes('gravity well')) {
                strainDataType = 'indica';
            }
            else if (lowerType.includes('time stream')) {
                strainDataType = 'sativa';
            }
            else if (lowerType.includes('space-time')) {
                strainDataType = 'hybrid';
            }
            // For anything else, use the hybrid default
            else {
                strainDataType = 'hybrid';
            }
            
            card.setAttribute('data-type', strainDataType);
            
            // If strain is not available, add the unavailable class and status badge
            if (strain.status !== 'available') {
                card.classList.add('unavailable');
                
                const statusBadge = document.createElement('div');
                statusBadge.className = `strain-status ${strain.status}`;
                
                // Set the text based on status
                if (strain.status === 'sold-out') {
                    statusBadge.textContent = 'TIMELINE CLOSED';
                } else if (strain.status === 'coming-soon') {
                    statusBadge.textContent = 'FUTURE ARRIVAL';
                }
                
                card.appendChild(statusBadge);
            } else {
                // Only add click handler for available strains
                card.addEventListener('click', function() {
                    openStrainModal(strain);
                });
            }
            
            // Create the card content
            card.innerHTML += `
                <img src="${strain.cardImage}" alt="${strain.name}" class="strain-img">
                <div class="card-content">
                    <h3 class="card-title">${strain.name}</h3>
                    <span class="strain-type">${strain.type.split('(')[0].trim()}</span>
                    <p class="card-description">${strain.description.substring(0, 150)}...</p>
                    <div class="strain-details">
                        <div class="detail-item">Cosmic Seed</div>
                        <div class="detail-item">Feminized</div>
                        <div class="detail-item">Trans-Dimensional</div>
                        <div class="detail-item">${strain.flowering}</div>
                    </div>
                </div>
            `;
            
            strainGrid.appendChild(card);
        });
    }
    
    // Open strain modal
    function openStrainModal(strain) {
        const strainModal = document.getElementById('strainModal');
        
        document.getElementById('modalTitle').textContent = strain.name;
        document.getElementById('modalImage').src = strain.image;
        document.getElementById('modalImage').alt = strain.name;
        document.getElementById('modalType').textContent = strain.type;
        document.getElementById('modalTHC').textContent = strain.thc;
        document.getElementById('modalCBD').textContent = strain.cbd;
        document.getElementById('modalFlowering').textContent = strain.flowering;
        document.getElementById('modalYield').textContent = strain.yield;
        document.getElementById('modalSeeds').textContent = strain.seeds;
        document.getElementById('modalDescription').textContent = strain.description;
        document.getElementById('modalGrowingTips').textContent = strain.growingTips;
        document.getElementById('modalEffects').textContent = strain.effects;
        
        // Populate thumbnails
        const thumbnailsContainer = document.getElementById('modalThumbnails');
        thumbnailsContainer.innerHTML = '';

        if (strain.images && strain.images.length > 0) {
            strain.images.forEach((imgSrc, index) => {
                const thumbnail = document.createElement('img');
                thumbnail.src = imgSrc;
                thumbnail.alt = `${strain.name} - image ${index + 1}`;
                thumbnail.className = 'modal-thumbnail';
                if (index === 0) {
                    thumbnail.classList.add('active');
                    document.getElementById('modalImage').src = imgSrc;
                }
                
                thumbnail.addEventListener('click', function() {
                    // Update main image
                    document.getElementById('modalImage').src = this.src;
                    
                    // Update active state
                    document.querySelectorAll('.modal-thumbnail').forEach(thumb => {
                        thumb.classList.remove('active');
                    });
                    this.classList.add('active');
                });
                
                thumbnailsContainer.appendChild(thumbnail);
            });
        }
        
        // Setup tabs
        setupModalTabs();

        // Pack options
        setupPackOptions(strain);
        
        // Show modal
        strainModal.style.display = 'block';
    }
    
    // Setup modal tabs
    function setupModalTabs() {
        document.querySelectorAll('.grow-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                document.querySelectorAll('.grow-tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Hide all tab content
                document.querySelectorAll('.grow-tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Show selected tab content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(`${tabId}Tab`).classList.add('active');
            });
        });
    }
    
    // Setup pack options
    function setupPackOptions(strain) {
        const packOptionsContainer = document.getElementById('packOptionButtons');
        packOptionsContainer.innerHTML = '';
        
        if (strain.packOptions && strain.packOptions.length > 0) {
            strain.packOptions.forEach(pack => {
                const button = document.createElement('div');
                button.className = 'pack-option-button';
                button.setAttribute('data-pack-id', pack.id);
                button.innerHTML = `
                    <span class="pack-size">${pack.size}</span>
                    <div class="pack-price">
                        <span class="regular-price">${pack.regularPrice.toFixed(2)}</span>
                        <span class="sale-price">${pack.salePrice.toFixed(2)}</span>
                    </div>
                `;
                
                button.addEventListener('click', function() {
                    // Remove 'selected' class from all buttons
                    document.querySelectorAll('.pack-option-button').forEach(btn => {
                        btn.classList.remove('selected');
                    });
                    
                    // Add 'selected' class to clicked button
                    this.classList.add('selected');
                });
                
                packOptionsContainer.appendChild(button);
            });
            
            // Add to cart button
            const addButton = document.createElement('button');
            addButton.className = 'cta-button';
            addButton.id = 'addStrainToCartBtn';
            addButton.textContent = 'Add to Time Capsule';
            addButton.style.marginTop = '20px';
            addButton.style.width = '100%';
            
            addButton.addEventListener('click', function() {
                const selectedPack = document.querySelector('.pack-option-button.selected');
                
                if (!selectedPack) {
                    alert('Please select a time capsule size');
                    return;
                }
                
                const packId = selectedPack.getAttribute('data-pack-id');
                addPackToCart(packId, strain);
            });
            
            packOptionsContainer.appendChild(addButton);
            
            // Select the first option by default
            if (packOptionsContainer.querySelector('.pack-option-button')) {
                packOptionsContainer.querySelector('.pack-option-button').classList.add('selected');
            }
        }
    }
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Show/hide strain cards based on filter
            document.querySelectorAll('.strain-card').forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Function to add pack to cart
    function addPackToCart(packId, strain) {
        const packOption = strain.packOptions.find(pack => pack.id === packId);
        
        if (!packOption) {
            console.error('Pack option not found:', packId);
            return;
        }
        
        // Define the item to add to cart
        const cartItem = {
            id: packId,
            strainId: strain.id,
            name: `${strain.name} - ${packOption.size}`,
            image: strain.cardImage,
            price: packOption.salePrice,
            regularPrice: packOption.regularPrice,
            type: strain.type,
            category: 'strain',
            quantity: 1
        };
        
        // Check if this exact pack is already in cart
        const existingItemIndex = cart.findIndex(item => item.id === packId);
        
        if (existingItemIndex !== -1) {
            // Increment quantity
            cart[existingItemIndex].quantity += 1;
        } else {
            // Add new item
            cart.push(cartItem);
        }
        
        // Save cart to localStorage
        localStorage.setItem('tardisCart', JSON.stringify(cart));
        
        // Update cart count
        updateCartCount();
        
        // Close modal
        document.getElementById('strainModal').style.display = 'none';
        
        // Show cart modal
        openCartModal();
    }
    
    // Open cart modal
    document.getElementById('cart-link').addEventListener('click', function(e) {
        e.preventDefault();
        openCartModal();
    });
    
    // Close modals on X click
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
    
    // Continue shopping button
    document.getElementById('continueShoppingBtn').addEventListener('click', function() {
        document.getElementById('cartModal').style.display = 'none';
    });
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', function() {
        if (cart.length > 0) {
            document.getElementById('cartModal').style.display = 'none';
            document.getElementById('checkoutModal').style.display = 'block';
        }
    });
    
    // Close checkout modal
    document.getElementById('closeCheckout').addEventListener('click', function() {
        document.getElementById('checkoutModal').style.display = 'none';
    });
    
    // Submit checkout form
    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Prepare order details
        let orderDetails = 'Temporal Order Items:\n\n';
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.quantity * item.price;
            total += itemTotal;
            
            orderDetails += `- ${item.quantity}x ${item.name} (${item.price.toFixed(2)} each): ${itemTotal.toFixed(2)}\n`;
        });
        
        orderDetails += `\nTotal: ${total.toFixed(2)}`;
        
        // Prepare email body
        const emailBody = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}

        ${orderDetails}

        Additional Notes:
        ${message}
        `;
        
        // Create mailto link
        const mailtoLink = `mailto:TardisGenetics@gmail.com?subject=New Order from ${name}&body=${encodeURIComponent(emailBody)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Clear cart
        cart = [];
        localStorage.setItem('tardisCart', JSON.stringify(cart));
        updateCartCount();
        
        // Close checkout modal
        document.getElementById('checkoutModal').style.display = 'none';
        
        // Show thank you message
        alert('Thank you for your order! Your email client has been opened with your order details. Please send the email to complete your journey through time and space.');
    });
    
    // Function to update cart count
    function updateCartCount() {
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        document.getElementById('cart-count').textContent = count;
    }
    
    // Function to open cart modal
    function openCartModal() {
        // Clear cart items
        const cartItemsEl = document.getElementById('cartItems');
        cartItemsEl.innerHTML = '';
        
        // Show/hide empty cart message
        const cartEmptyEl = document.getElementById('cartEmpty');
        const cartTotalEl = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        
        if (cart.length === 0) {
            cartEmptyEl.style.display = 'block';
            cartTotalEl.style.display = 'none';
            checkoutBtn.disabled = true;
            checkoutBtn.style.opacity = '0.5';
        } else {
            cartEmptyEl.style.display = 'none';
            cartTotalEl.style.display = 'flex';
            checkoutBtn.disabled = false;
            checkoutBtn.style.opacity = '1';
            
            // Add cart items
            let total = 0;
            
            cart.forEach((item, index) => {
                const itemPrice = item.price || 0;
                const itemTotal = item.quantity * itemPrice;
                total += itemTotal;
                
                const cartItemEl = document.createElement('div');
                cartItemEl.className = 'cart-item';
                cartItemEl.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="cart-item-type">${item.type || ''}</div>
                    </div>
                    <div class="quantity-selector">
                        <button class="quantity-btn decrease" data-index="${index}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase" data-index="${index}">+</button>
                    </div>
                    <div class="cart-item-price">${itemTotal.toFixed(2)}</div>
                    <button class="cart-item-remove" data-index="${index}">&times;</button>
                `;
                
                cartItemsEl.appendChild(cartItemEl);
            });
            
            // Update total
            document.getElementById('totalAmount').textContent = `${total.toFixed(2)}`;
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    if (cart[index].quantity > 1) {
                        cart[index].quantity -= 1;
                        localStorage.setItem('tardisCart', JSON.stringify(cart));
                        updateCartCount();
                        openCartModal(); // Refresh cart modal
                    }
                });
            });
            
            document.querySelectorAll('.quantity-btn.increase').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    cart[index].quantity += 1;
                    localStorage.setItem('tardisCart', JSON.stringify(cart));
                    updateCartCount();
                    openCartModal(); // Refresh cart modal
                });
            });
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.cart-item-remove').forEach(button => {
                button.addEventListener('click', function() {
                    const index = parseInt(this.getAttribute('data-index'));
                    cart.splice(index, 1);
                    localStorage.setItem('tardisCart', JSON.stringify(cart));
                    updateCartCount();
                    openCartModal(); // Refresh cart modal
                });
            });
        }
        
        // Show cart modal
        document.getElementById('cartModal').style.display = 'block';
    }
    
    // Create floating galaxies
    const galaxiesContainer = document.getElementById('floatingGalaxies');
    
    function createGalaxy() {
        const galaxy = document.createElement('div');
        galaxy.className = 'galaxy';
        
        // Random horizontal position
        galaxy.style.left = Math.random() * 100 + 'vw';
        
        // Set position to bottom of screen
        galaxy.style.top = 'auto';
        galaxy.style.bottom = '-50px';
        
        // Random galaxy size
        const galaxySize = Math.random() * 60 + 40;
        galaxy.style.width = galaxySize + 'px';
        galaxy.style.height = galaxySize + 'px';
        
        // Random hue rotation for color variety
        const hue = Math.random() * 360;
        galaxy.style.setProperty('--hue', hue + 'deg');
        
        // Random float time
        const floatTime = Math.random() * 20 + 30;
        galaxy.style.setProperty('--float-time', floatTime + 's');
        
        // Add to container
        galaxiesContainer.appendChild(galaxy);
        
        // Remove galaxy after animation
        setTimeout(() => {
            galaxy.remove();
        }, floatTime * 1000);
    }
    
    // Create galaxies every 3 seconds
    setInterval(createGalaxy, 3000);
    
    // Create initial galaxies
    for (let i = 0; i < 8; i++) {
        createGalaxy();
    }
    
    // Initialize the page
    renderStrainCards();

	// TARDIS box teleportation - fixed dimensions approach
	function teleportTardis() {
		const tardisBox = document.getElementById('tardisBox');
		
		if (!tardisBox) return;
		
		// Your exact dimensions - hero box is 1200x340
		const heroWidth = 1200;
		const heroHeight = 340;
		
		// TARDIS dimensions
		const tardisWidth = 40;
		const tardisHeight = 60;
		
		// Safe area calculation (keep TARDIS fully visible)
		const safeMaxX = heroWidth - tardisWidth - 20;
		const safeMaxY = heroHeight - tardisHeight - 20;
		
		// Generate random position
		const x = Math.floor(Math.random() * safeMaxX) + 20;
		const y = Math.floor(Math.random() * safeMaxY) + 20;
		
		// Random behavior (0 = wall align, 1 = free float)
		const behavior = Math.random() > 0.5 ? 0 : 1;
		let rotation;
		
		if (behavior === 0) {
			// Wall align - choose a wall
			const wall = Math.floor(Math.random() * 4);
			
			switch(wall) {
				case 0: // Bottom
					rotation = 0;
					break;
				case 1: // Left
					rotation = 90;
					break;
				case 2: // Top
					rotation = 180;
					break;
				case 3: // Right
					rotation = 270;
					break;
			}
			
			// Add slight tilt variation
			rotation += Math.random() * 20 - 10;
		} else {
			// Free float - random angle
			rotation = Math.random() * 360;
		}
		
		// Set position directly
		tardisBox.style.position = 'absolute';
		tardisBox.style.left = `${x}px`;
		tardisBox.style.top = `${y}px`;
		tardisBox.style.transform = `rotate(${rotation}deg)`;
		
		// Teleport effect
		tardisBox.style.opacity = '0';
		setTimeout(() => {
			tardisBox.style.opacity = '1';
		}, 200);
	}

	// Initial teleport
	teleportTardis();

	// Teleport every 8 seconds
	setInterval(teleportTardis, 8000);
	
});
