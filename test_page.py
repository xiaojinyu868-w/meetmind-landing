from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    
    # 监听控制台错误
    page.on("console", lambda msg: print(f"CONSOLE [{msg.type}]: {msg.text}"))
    page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))
    
    print("正在访问 http://localhost:5173 ...")
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    
    # 等待一下确保JS执行完成
    page.wait_for_timeout(2000)
    
    # 获取页面内容
    content = page.content()
    print(f"\n页面HTML长度: {len(content)} 字符")
    print(f"页面标题: {page.title()}")
    
    # 检查root元素
    root = page.locator('#root')
    print(f"\n#root 元素存在: {root.count() > 0}")
    if root.count() > 0:
        print(f"#root 内部HTML长度: {len(root.inner_html())} 字符")
        print(f"#root 内容预览: {root.inner_html()[:500]}")
    
    # 截图
    page.screenshot(path='c:/Users/Li Hao/Desktop/app/meetmind-landing/debug_screenshot.png', full_page=True)
    print("\n截图已保存到 debug_screenshot.png")
    
    browser.close()
