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

    // Build the RCA text
    let RCAText = `
# *Summary*
** Title: ${title}
** Affected Component/Product: ${affectedComponent}
** Symptoms: ${formatText(symptoms)}
# *Investigation*
** Steps to Reproduce: ${formatText(steps)}
** Data Analysis: ${formatText(analysis)}
** Root Cause: ${formatText(rootcause)}
** Contributing Factors: ${formatText(factors)}
# *Resolution*
** Workaround: ${formatText(workaround)}
** Solution Implemented: ${formatText(solution)}
# *Preventive Measures*
** Lessons Learned: ${formatText(lesson)}
** Future Action Items: ${formatText(future)}
** Prevention: ${formatText(prevention)}
    `;

    // Set output
    document.getElementById('output').value = RCAText;
}

function copyToClipboard() {
    const copyText = document.getElementById('output');
    copyText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
