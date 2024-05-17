function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    // Researched Regex patterns for the conditions of the required syntax.
    const pattern = /^pet_[a-zA-Z0-9]+$/;

    // Placeholder for validation result
    let result = ''; 
    // Declared a variable in order to manipulate the indicators' colour to match the result.
    let indicator = document.getElementById('indicator');
    // TODO: Write your validation logic here
    if(pattern.test(input)) {
        result = "Valid Syntax";
        indicator.className = 'valid';
    } else {
        result = "Invalid Syntax";
        indicator.className = 'invalid';
    }
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        document.getElementById('result').innerText = result;
}


