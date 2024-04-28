function generateMarkdown() {
    const title = document.getElementById('title').value;

    // Construct markdown text
    let markdownText = `
# *Summary*
** Title: ${title}
** Affected Component/Product: 
** Symptoms: 
# *Investigation*
** Steps to Reproduce: 
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
