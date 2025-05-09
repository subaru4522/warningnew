document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.getElementById('terminal');
    const warningText = document.getElementById('warning-text');
    
    const fullWarningText = "偷看别人的电脑系统文件可是犯罪行为，安室君";
    let currentIndex = 0;
    
    function typeWriter() {
        if (currentIndex < fullWarningText.length) {
            warningText.textContent += fullWarningText.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                const inputLine = document.createElement('div');
                inputLine.className = 'input-line';
                inputLine.innerHTML = `
                    <span class="prompt">subaru@system:~$</span>
                    <input type="text" id="command-input">
                `;
                terminal.appendChild(inputLine);
                
                initCommandInput();
            }, 1000);
        }
    }
    
    typeWriter();
});

function initCommandInput() {
    const commandInput = document.getElementById('command-input');
    const terminal = document.getElementById('terminal');
    
    commandInput.focus();
    
    commandInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = commandInput.value.trim();
            if (command) {
                addCommandOutput(command);
                processCommand(command);
                commandInput.value = '';
            }
        }
    });
    
    terminal.addEventListener('click', function() {
        commandInput.focus();
    });
    
    function addCommandOutput(command) {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output';
        
        const promptSpan = document.createElement('div');
        promptSpan.className = 'prompt';
        promptSpan.textContent = 'subaru@system:~$';
        
        const commandSpan = document.createElement('div');
        commandSpan.className = 'command';
        commandSpan.textContent = command;
        
        outputDiv.appendChild(promptSpan);
        outputDiv.appendChild(commandSpan);
        
        terminal.insertBefore(outputDiv, commandInput.parentNode);
    }
    
    function processCommand(command) {
        let output = '';
        
        switch(command.toLowerCase()) {
            case 'help':
                output = '可用命令:\nclear - 清屏\nhelp - 显示帮助\nls - 列出文件\nwhoami - 显示当前用户';
                break;
            case 'clear':
                const outputs = document.querySelectorAll('.output');
                outputs.forEach(el => el.remove());
                return;
            case 'ls':
                output = '警告：未经授权访问系统文件是违法行为\n\nDesktop\nDocuments\nDownloads\nPictures\nMusic\nVideos';
                break;
            case 'ls -la':
                output = '警告：尝试访问受保护的系统文件已被记录\n\ndrwxr-xr-x 2 subaru subaru 4096 Jan 1 00:00 Desktop\ndrwxr-xr-x 2 subaru subaru 4096 Jan 1 00:00 Documents\ndrwxr-xr-x 2 subaru subaru 4096 Jan 1 00:00 Downloads';
                break;
            case 'whoami':
                output = 'subaru\n\n警告：此系统受监控，所有操作将被记录';
                break;
            default:
                output = `命令未找到: ${command}\n输入"help"获取可用命令列表\n\n注意：非法操作可能导致法律后果`;
        }
        
        const outputDiv = document.createElement('div');
        outputDiv.className = 'output';
        outputDiv.textContent = output;
        
        terminal.insertBefore(outputDiv, commandInput.parentNode);
        terminal.scrollTop = terminal.scrollHeight;
    }
}