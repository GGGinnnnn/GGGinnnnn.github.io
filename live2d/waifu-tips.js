window.waifuTips = {
    welcome: "欢迎来到我的博客！",
    copy: "复制成功！记得注明出处哦~",
    hour: (hours) => {
        if (hours <= 5) return "凌晨好，注意休息哦";
        if (hours <= 9) return "早上好，新的一天开始了";
        if (hours <= 12) return "上午好，工作顺利吗？";
        if (hours <= 14) return "中午好，吃过午饭了吗？";
        if (hours <= 17) return "下午好，工作学习加油！";
        if (hours <= 19) return "傍晚好，准备吃晚饭了吗？";
        return "晚上好，注意休息时间哦";
    },
    referrer: {
        "google.com": "你来自谷歌搜索",
        "baidu.com": "你来自百度搜索",
        "github.com": "欢迎GitHub用户"
    }
};