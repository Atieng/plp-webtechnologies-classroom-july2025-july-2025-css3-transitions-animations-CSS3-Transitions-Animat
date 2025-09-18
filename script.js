// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Global variables
const globalMessage = "This is a global variable";

// Function demonstrating parameters and return values
function calculate(operation, num1, num2) {
    // Local variables - only accessible within this function
    let result;
    
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'divide':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operation';
    }
    
    return result;
}

// Function demonstrating scope
function demonstrateScope() {
    const localMessage = "This is a local variable";
    console.log("Inside function:", localMessage);
    console.log("Global accessed inside function:", globalMessage);
    
    // This would cause an error - trying to access local variable outside its scope
    // console.log("Trying to access local outside:", localMessage);
}

// Function to change element color with parameters
function changeElementColor(elementId, color) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundColor = color;
        return true; // Success
    }
    return false; // Element not found
}

// Reusable function to toggle animation
function toggleAnimation(elementId, className) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle(className);
        return element.classList.contains(className);
    }
    return false;
}

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Part 3: Combining CSS Animations with JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Demonstrate scope
    demonstrateScope();
    console.log("Global accessed outside:", globalMessage);
    
    // Animation control buttons
    const startBtn = document.getElementById('start-animation');
    const stopBtn = document.getElementById('stop-animation');
    const colorBtn = document.getElementById('change-color');
    const animatedBox = document.getElementById('js-controlled-box');
    
    if (startBtn && stopBtn && colorBtn && animatedBox) {
        startBtn.addEventListener('click', function() {
            const isAnimating = toggleAnimation('js-controlled-box', 'animate');
            console.log('Animation started:', isAnimating);
        });
        
        stopBtn.addEventListener('click', function() {
            const isAnimating = toggleAnimation('js-controlled-box', 'animate');
            console.log('Animation stopped:', !isAnimating);
        });
        
        colorBtn.addEventListener('click', function() {
            const randomColor = getRandomColor();
            const success = changeElementColor('js-controlled-box', randomColor);
            if (success) {
                console.log('Color changed to:', randomColor);
            }
        });
    }
    
    // Calculator functionality
    const addBtn = document.getElementById('add-numbers');
    const multiplyBtn = document.getElementById('multiply-numbers');
    const resultDisplay = document.getElementById('calc-result');
    
    if (addBtn && multiplyBtn && resultDisplay) {
        addBtn.addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value) || 0;
            const num2 = parseFloat(document.getElementById('num2').value) || 0;
            const result = calculate('add', num1, num2);
            resultDisplay.textContent = `Result: ${result}`;
        });
        
        multiplyBtn.addEventListener('click', function() {
            const num1 = parseFloat(document.getElementById('num1').value) || 0;
            const num2 = parseFloat(document.getElementById('num2').value) || 0;
            const result = calculate('multiply', num1, num2);
            resultDisplay.textContent = `Result: ${result}`;
        });
    }
    
    // Modal functionality
    const modal = document.getElementById('demo-modal');
    const openModalBtn = document.getElementById('open-modal');
    const closeModalBtn = document.querySelector('.close');
    
    if (modal && openModalBtn && closeModalBtn) {
        openModalBtn.addEventListener('click', function() {
            modal.classList.add('active');
        });
        
        closeModalBtn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Additional interactive elements
    const flipCard = document.querySelector('.flip-card');
    if (flipCard) {
        // Adding JavaScript control to CSS flip animation
        flipCard.addEventListener('click', function() {
            this.querySelector('.flip-card-inner').classList.toggle('flipped');
        });
    }
});