<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live2D 看板娘配置指南</title>
    <style>
        :root {
            --primary-color: #4a6fa5;
            --secondary-color: #6b8cbc;
            --accent-color: #ff7e5f;
            --light-color: #f0f4f8;
            --dark-color: #2c3e50;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: var(--light-color);
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        
        header {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 40px 20px;
            text-align: center;
        }
        
        header h1 {
            font-size: 2.8rem;
            margin-bottom: 15px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        header p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0.9;
        }
        
        .content-section {
            padding: 40px;
        }
        
        .section-title {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-bottom: 25px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--secondary-color);
        }
        
        .config-steps {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            margin: 30px 0;
        }
        
        .step-card {
            flex: 1;
            min-width: 300px;
            background: #f8faff;
            border-radius: 10px;
            padding: 25px;
            border-left: 5px solid var(--accent-color);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease;
        }
        
        .step-card:hover {
            transform: translateY(-5px);
        }
        
        .step-card h3 {
            font-size: 1.4rem;
            color: var(--dark-color);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .step-card h3 .step-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            background: var(--accent-color);
            color: white;
            border-radius: 50%;
            margin-right: 12px;
            font-weight: bold;
        }
        
        .code-block {
            background: #2d2d2d;
            color: #f8f8f2;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            font-family: 'Fira Code', 'Consolas', monospace;
            margin: 20px 0;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .code-comment {
            color: #6a9955;
        }
        
        .code-keyword {
            color: #c586c0;
        }
        
        .code-string {
            color: #ce9178;
        }
        
        .code-function {
            color: #dcdcaa;
        }
        
        .file-structure {
            background: #f0f7ff;
            border-radius: 8px;
            padding: 20px;
            font-family: monospace;
            line-height: 1.8;
            margin: 20px 0;
        }
        
        .demo-area {
            background: #f9f9f9;
            border-radius: 10px;
            padding: 30px;
            text-align: center;
            margin: 40px 0;
            border: 1px dashed var(--secondary-color);
        }
        
        .demo-title {
            font-size: 1.5rem;
            color: var(--primary-color);
            margin-bottom: 20px;
        }
        
        #live2d-container {
            min-height: 350px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border-radius: 8px;
            padding: 20px;
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
        }
        
        footer {
            text-align: center;
            padding: 30px;
            background: var(--dark-color);
            color: rgba(255, 255, 255, 0.8);
        }
        
        @media (max-width: 768px) {
            .content-section {
                padding: 20px;
            }
            
            .step-card {
                min-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Live2D 看板娘配置指南</h1>
            <p>学习在哪个文件以及如何正确配置 initWidget 函数</p>
        </header>
        
        <div class="content-section">
            <h2 class="section-title">配置 initWidget 的最佳位置</h2>
            
            <div class="config-steps">
                <div class="step-card">
                    <h3><span class="step-number">1</span> 创建配置文件</h3>
                    <p>在您的网站 <code>js</code> 目录中创建 <code>live2d-init.js</code> 文件</p>
                    <p>这是配置 initWidget 的推荐位置，保持代码组织清晰。</p>
                </div>
                
                <div class="step-card">
                    <h3><span class="step-number">2</span> 添加配置代码</h3>
                    <p>在 <code>live2d-init.js</code> 中添加以下代码：</p>
                    <div class="code-block">
<span class="code-comment">// 当DOM加载完成后执行</span>
window.addEventListener(<span class="code-string">'DOMContentLoaded'</span>, () => {
    <span class="code-comment">// 检查initWidget函数是否可用</span>
    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> initWidget === <span class="code-string">'function'</span>) {
        <span class="code-comment">// 配置看板娘</span>
        initWidget({
            <span class="code-comment">// 模型配置</span>
            model: {
                jsonPath: <span class="code-string">'/live2d_models/kiana/kiana.model.json'</span>,
                scale: 1.1
            },
            
            <span class="code-comment">// 提示配置</span>
            waifuPath: <span class="code-string">'/live2d_models/kiana/waifu-tips.json'</span>,
            
            <span class="code-comment">// 显示设置</span>
            display: {
                position: <span class="code-string">'right'</span>,
                width: 250,
                height: 350,
                xOffset: -20,
                yOffset: 20
            },
            
            <span class="code-comment">// 工具栏选项</span>
            tools: [<span class="code-string">'hitokoto'</span>, <span class="code-string">'switch-model'</span>, <span class="code-string">'photo'</span>, <span class="code-string">'quit'</span>],
            
            <span class="code-comment">// 其他设置</span>
            logLevel: <span class="code-string">'warn'</span>,
            drag: true
        });
        
        console.log(<span class="code-string">'Live2D 看板娘初始化成功！'</span>);
    } <span class="code-keyword">else</span> {
        console.error(<span class="code-string">'initWidget 函数未定义！'</span>);
    }
});
                    </div>
                </div>
                
                <div class="step-card">
                    <h3><span class="step-number">3</span> 在HTML中引用</h3>
                    <p>在您的HTML文件中引用必要脚本：</p>
                    <div class="code-block">
&lt;<span class="code-keyword">head</span>&gt;
    <span class="code-comment">&lt;!-- 引入官方autoload.js --&gt;</span>
    &lt;<span class="code-keyword">script</span> <span class="code-function">src</span>=<span class="code-string">"https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0-rc.5/dist/autoload.js"</span>&gt;&lt;/<span class="code-keyword">script</span>&gt;
&lt;/<span class="code-keyword">head</span>&gt;

&lt;<span class="code-keyword">body</span>&gt;
    <span class="code-comment">&lt;!-- 页面内容 --&gt;</span>
    
    <span class="code-comment">&lt;!-- 引入配置文件 --&gt;</span>
    &lt;<span class="code-keyword">script</span> <span class="code-function">src</span>=<span class="code-string">"/js/live2d-init.js"</span>&gt;&lt;/<span class="code-keyword">script</span>&gt;
&lt;/<span class="code-keyword">body</span>&gt;
                    </div>
                </div>
            </div>
            
            <h2 class="section-title">文件结构示例</h2>
            <div class="file-structure">
your-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── live2d-init.js       <span class="code-comment"># 配置 initWidget 的文件</span>
│   └── other-scripts.js
└── live2d_models/
    └── kiana/
        ├── kiana.model.json
        ├── waifu-tips.json
        └── textures/
            ├── texture_00.png
            └── texture_01.png
            </div>
            
            <h2 class="section-title">配置选项详解</h2>
            
            <div class="code-block">
initWidget({
    <span class="code-comment">// 必需: 模型配置文件路径</span>
    model: {
        jsonPath: <span class="code-string">'/live2d_models/kiana/kiana.model.json'</span>,
        <span class="code-comment">// 可选: 模型缩放比例</span>
        scale: 1.1
    },
    
    <span class="code-comment">// 必需: 提示语配置文件路径</span>
    waifuPath: <span class="code-string">'/live2d_models/kiana/waifu-tips.json'</span>,
    
    <span class="code-comment">// 可选: 显示位置和尺寸</span>
    display: {
        position: <span class="code-string">'right'</span>, <span class="code-comment">// 位置: 'left'或'right'</span>
        width: 250,         <span class="code-comment">// 宽度</span>
        height: 350,        <span class="code-comment">// 高度</span>
        xOffset: -20,       <span class="code-comment">// 水平偏移</span>
        yOffset: 20         <span class="code-comment">// 垂直偏移</span>
    },
    
    <span class="code-comment">// 可选: 工具栏按钮</span>
    tools: [
        <span class="code-string">'hitokoto'</span>,      <span class="code-comment">// 一言</span>
        <span class="code-string">'switch-model'</span>,  <span class="code-comment">// 切换模型</span>
        <span class="code-string">'switch-texture'</span>,<span class="code-comment">// 切换材质</span>
        <span class="code-string">'photo'</span>,         <span class="code-comment">// 拍照</span>
        <span class="code-string">'info'</span>,          <span class="code-comment">// 信息</span>
        <span class="code-string">'quit'</span>           <span class="code-comment">// 退出</span>
    ],
    
    <span class="code-comment">// 可选: 日志级别</span>
    logLevel: <span class="code-string">'warn'</span>, <span class="code-comment">// 'debug', 'info', 'warn', 'error'</span>
    
    <span class="code-comment">// 可选: 是否可拖动</span>
    drag: true,
    
    <span class="code-comment">// 可选: 移动端设置</span>
    mobile: {
        show: true,     <span class="code-comment">// 在移动端显示</span>
        scale: 0.8,     <span class="code-comment">// 移动端缩放比例</span>
        motion: false   <span class="code-comment">// 移动端是否启用动作</span>
    }
});
            </div>
            
            <div class="demo-area">
                <h3 class="demo-title">Live2D 看板娘演示</h3>
                <div id="live2d-container">
                    <p>此处将显示配置好的 Live2D 看板娘</p>
                </div>
            </div>
        </div>
        
        <footer>
            <p>Live2D Widget 官方文档: 
                <a href="https://github.com/stevenjoezhang/live2d-widget" target="_blank" style="color: #4fc3f7;">
                    https://github.com/stevenjoezhang/live2d-widget
                </a>
            </p>
            <p>© 2023 Live2D 看板娘配置指南</p>
        </footer>
    </div>
    
    <!-- 实现 Live2D 看板娘 -->
    <script src="https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0-rc.5/dist/autoload.js"></script>
    <script>
        // 这里是配置 initWidget 的位置 - 在实际项目中应在单独文件中
        window.addEventListener('DOMContentLoaded', () => {
            if (typeof initWidget === 'function') {
                // 实际项目中应该使用本地模型路径
                // 这里使用在线模型用于演示
                initWidget({
                    model: {
                        jsonPath: 'https://fastly.jsdelivr.net/npm/live2d-widgets@1.0.0-rc.5/dist/models/shizuku/shizuku.model.json'
                    },
                    display: {
                        position: 'right',
                        width: 250,
                        height: 350,
                        xOffset: -20,
                        yOffset: 20
                    },
                    tools: ['hitokoto', 'switch-model', 'photo', 'quit'],
                    logLevel: 'warn',
                    drag: true
                });
            }
        });
    </script>
</body>
</html>