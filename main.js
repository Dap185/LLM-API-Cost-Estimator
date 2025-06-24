function calculate() {
    let modelName = document.getElementById("model").selectedOptions[0].textContent;
    let model = new Model(modelName);
    let inputCostPerToken = model.input / 1000000;
    let outputCostPerToken = model.output / 1000000;
    
    let inputTokens = document.getElementById("numInputTokens").value;
    let outputTokens = document.getElementById("numOutputTokens").value;
    let numStudents = document.getElementById("numStudents").value;
    let numLevels = document.getElementById("numLevels").value;
    let numPrompts = document.getElementById("numPrompts").value;
    
    let result = numStudents * numLevels * numPrompts * (inputCostPerToken * inputTokens + outputCostPerToken * outputTokens );
    
    document.getElementById("result").textContent = "$" + result.toFixed(2);
}