from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    
    page.on("console", lambda msg: print(f"CONSOLE [{msg.type}]: {msg.text}"))
    page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))
    
    print("访问首页...")
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(2000)
    
    print(f"页面标题: {page.title()}")
    
    # 点击"查看投资人Q&A"按钮
    print("点击投资人Q&A按钮...")
    button = page.locator('button:has-text("查看投资人Q&A")')
    if button.count() > 0:
        button.click()
        page.wait_for_timeout(3000)
        
        print(f"点击后标题: {page.title()}")
        
        # 截图
        page.screenshot(path='c:/Users/Li Hao/Desktop/app/meetmind-landing/qa_screenshot.png', full_page=True)
        print("截图已保存到 qa_screenshot.png")
    else:
        print("未找到按钮")
        print("页面内容:", page.content()[:1000])
    
    browser.close()
