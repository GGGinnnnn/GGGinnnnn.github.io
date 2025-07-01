document.addEventListener('DOMContentLoaded', function() {
    // 确保 Live2D 库已加载
    if (typeof L2Dwidget === 'undefined') {
        console.error('Live2D widget library not loaded');
        return;
    }
    
    // 初始化 Live2D
    L2Dwidget.init({
        pluginRootPath: 'live2dw/',
        pluginJsPath: 'lib/',
        pluginModelPath: window.Live2D_Config.modelPath,
        display: window.Live2D_Config.display,
        mobile: window.Live2D_Config.mobile,
        react: window.Live2D_Config.react,
        log: false,
        model: {
            jsonPath: window.Live2D_Config.modelPath + 'kiana/model.json'
        },
        dialog: {
            enable: true,
            script: {
                // 每次逗留时随机说一句
                'every idle 10s': window.waifuTips && window.waifuTips.idle || [
                    '好久不见，日子过得好快呢……',
                    '大坏蛋！你都多久没理人家了呀，嘤嘤嘤～',
                    '嘿！快来注意我！',
                    '拿小拳拳锤你胸口！'
                ],
                // 当触摸到角色特定部位时
                'tap body': window.waifuTips && window.waifuTips.tap || [
                    '哎呀！别碰我！',
                    '再摸我就报警了！⌇●﹏●⌇',
                    '手感怎么样？'
                ]
            }
        }
    });
    
    // 自定义功能
    setTimeout(() => {
        addCustomFunctions();
    }, 2000);

function enableDrag() {
    const waifu = document.getElementById('waifu');
    let isDragging = false;
    let offsetX, offsetY;
    
    waifu.addEventListener('mousedown', (e) => {
        if (e.target.closest('.waifu-tool-item')) return;
        
        isDragging = true;
        offsetX = e.clientX - waifu.getBoundingClientRect().left;
        offsetY = e.clientY - waifu.getBoundingClientRect().top;
        waifu.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        
        waifu.style.left = x + 'px';
        waifu.style.right = 'auto';
        waifu.style.bottom = 'auto';
        waifu.style.top = y + 'px';
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        waifu.style.cursor = 'default';
    });
}

// 在初始化后调用
setTimeout(enableDrag, 1000);
    
    function addCustomFunctions() {
        const waifu = document.getElementById('waifu');
        if (!waifu) return;
        
        // 创建工具栏
        const tool = document.createElement('div');
        tool.id = 'waifu-tool';
        waifu.appendChild(tool);
        
        // 添加工具按钮
        const tools = [
            {icon: '🏠', text: '返回首页', action: () => window.location.href = '/'},
            {icon: '🔄', text: '切换模型', action: switchModel},
            {icon: '💡', text: '提示', action: showRandomTip},
            {icon: '❌', text: '关闭', action: () => waifu.style.display = 'none'}
        ];
        
        tools.forEach(item => {
            const toolItem = document.createElement('span');
            toolItem.className = 'waifu-tool-item';
            toolItem.innerHTML = item.icon;
            toolItem.title = item.text;
            toolItem.addEventListener('click', item.action);
            tool.appendChild(toolItem);
        });
    }
    
    function switchModel() {
        const models = ['kiana', 'hijiki', 'wanko', 'z16', 'koharu'];
        const currentModel = localStorage.getItem('live2d_model') || 'kiana';
        const nextIndex = (models.indexOf(currentModel) + 1) % models.length;
        const model = models[nextIndex];
        
        localStorage.setItem('live2d_model', model);
        L2Dwidget.init({
            model: {
                jsonPath: window.Live2D_Config.modelPath + model + '/model.json'
            }
        });
        showMessage(`已切换至${model}模型`, 2000);
    }
    
    function showRandomTip() {
        const tips = [
            '喜欢这个博客吗？',
            '要常来玩哦~',
            '博客内容持续更新中',
            '有什么建议可以留言告诉我',
            '按F11可以进入全屏模式',
            '按住Ctrl再滚动鼠标可以缩放页面'
        ];
        const tip = tips[Math.floor(Math.random() * tips.length)];
        showMessage(tip, 3000);
    }
    
    function showMessage(text, duration) {
        let tips = document.getElementById('waifu-tips');
        if (!tips) {
            tips = document.createElement('div');
            tips.id = 'waifu-tips';
            document.getElementById('waifu').appendChild(tips);
        }
        
        tips.innerHTML = text;
        tips.style.opacity = 1;
        
        setTimeout(() => {
            tips.style.opacity = 0;
        }, duration);
    }
});