function generateMarkdown() {
    const title = document.getElementById('title').value;
    const affectedComponent = document.getElementById('affectedComponent').value;
    const symptoms = document.getElementById('symptoms').value;
    const steps = document.getElementById('steps').value;

    // Build the markdown text
    let markdownText = `
# *Summary*
** Title: ${title}
** Affected Component/Product: ${affectedComponent}
** Symptoms: ${symptoms.replace(/\n/g, '\n** ')}
# *Investigation*
** Steps to Reproduce: ${steps.replace(/\n/g, '\n** ')}
** Data Analysis: 
** Root Cause: 
** Contributing Factors: 
# *Resolution*
** Workaround: 
** Solution Implemented: 
# *Preventive Measures*
** Lessons Learned: 
** Future Action Items: 
** Prevention: 
    `;

    // Set output
    document.getElementById('output').value = markdownText;
}

function copyToClipboard() {
    const copyText = document.getElementById('output');
    copyText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
