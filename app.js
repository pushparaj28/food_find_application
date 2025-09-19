        // Image Upload Functionality
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');
        const imagePreview = document.getElementById('image-preview');
        const generateRecipeBtn = document.getElementById('generate-recipe-btn');

        uploadArea.addEventListener('click', () => {
            fileInput.click();
        });

        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#4CAF50';
            uploadArea.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        });

        uploadArea.addEventListener('dragleave', () => {
            uploadArea.style.borderColor = '#95A5A6';
            uploadArea.style.backgroundColor = 'transparent';
        });

        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.style.borderColor = '#95A5A6';
            uploadArea.style.backgroundColor = 'transparent';
            
            const file = e.dataTransfer.files[0];
            handleImage(file);
        });

        fileInput.addEventListener('change', () => {
            const file = fileInput.files[0];
            handleImage(file);
        });

        function handleImage(file) {
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                    generateRecipeBtn.style.display = 'inline-block';
                    uploadArea.style.display = 'none';
                }
                
                reader.readAsDataURL(file);
            }
        }

        generateRecipeBtn.addEventListener('click', () => {
            alert('Recipe generation from your image is in progress! This feature would typically use AI to analyze your food image and suggest recipes.');
        });

        // Filter buttons functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // This would normally filter the recipe results
                alert(`Filtering by: ${button.textContent}`);
            });
        });

        // Search functionality
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        
        searchBtn.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        function performSearch() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
                // This would normally perform a search and display results
            }
        }

        // Recipe generation from ingredients
        const generateBtn = document.querySelector('.ingredients-input .btn');
        const ingredientsTextarea = document.querySelector('.ingredients-textarea');
        
        generateBtn.addEventListener('click', () => {
            const ingredients = ingredientsTextarea.value.trim();
            if (ingredients) {
                alert(`Generating recipe based on: ${ingredients}`);
                // This would normally send the ingredients to a recipe generator API
            } else {
                alert('Please enter some ingredients first!');
            }
        });
    