function generateRCA() {
    const title = document.getElementById('title').value;
    const affectedComponent = document.getElementById('affectedComponent').value;
    const symptoms = document.getElementById('symptoms').value;
    const steps = document.getElementById('steps').value;
    const analysis = document.getElementById('analysis').value;
    const rootcause = document.getElementById('rootcause').value;
    const factors = document.getElementById('factors').value;
    const workaround = document.getElementById('workaround').value;
    const solution = document.getElementById('solution').value;
    const lesson = document.getElementById('lesson').value;
    const future = document.getElementById('future').value;
    const prevention = document.getElementById('prevention').value;

    // Function to format text based on single or multiple lines
    function formatText(text) {
        if (text.includes('\n')) {
            // If the text contains new lines, wrap it in code tags
            return `{code:java}${text}{code}`;
        } else {
            // If single line, return as is
            return text;
        }
    }

    // Function to create a line only if the input is not empty
    function createLine(label, value) {
        if (value.trim() !== '') {
            return `** ${label}: ${formatText(value)}\n`;
        }
        return '';
    }

    // Build the RCA text
    let RCAText = `# *Summary*\n`;
    RCAText += createLine('Title', title);
    RCAText += createLine('Affected Component/Product', affectedComponent);
    RCAText += createLine('Symptoms', symptoms);

    RCAText += `# *Investigation*\n`;
    RCAText += createLine('Steps to Reproduce', steps);
    RCAText += createLine('Data Analysis', analysis);
    RCAText += createLine('Root Cause', rootcause);
    RCAText += createLine('Contributing Factors', factors);

    RCAText += `# *Resolution*\n`;
    RCAText += createLine('Workaround', workaround);
    RCAText += createLine('Solution Implemented', solution);

    RCAText += `# *Preventive Measures*\n`;
    RCAText += createLine('Lessons Learned', lesson);
    RCAText += createLine('Future Action Items', future);
    RCAText += createLine('Prevention', prevention);

    // Set output
    document.getElementById('output').value = RCAText;
}

function copyToClipboard() {
    const copyText = document.getElementById('output');
    copyText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
