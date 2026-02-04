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
    
    # 点击"投资人Q&A"按钮
    print("点击投资人Q&A按钮...")
    button = page.locator('button:has-text("投资人Q&A")')
    if button.count() > 0:
        button.click()
        page.wait_for_timeout(3000)
        
        print(f"点击后标题: {page.title()}")
        
        # 截图 - Q&A列表页
        page.screenshot(path='c:/Users/Li Hao/Desktop/app/meetmind-landing/qa_list_screenshot.png', full_page=True)
        print("Q&A列表页截图已保存到 qa_list_screenshot.png")
        
        # 点击第一个Q&A
        print("点击第一个Q&A...")
        qa_button = page.locator('button:has-text("如何解决")').first
        if qa_button.count() > 0:
            qa_button.click()
            page.wait_for_timeout(3000)
            
            # 截图 - Q&A详情页
            page.screenshot(path='c:/Users/Li Hao/Desktop/app/meetmind-landing/qa_detail_screenshot.png', full_page=True)
            print("Q&A详情页截图已保存到 qa_detail_screenshot.png")
            
            # 测试返回按钮
            print("点击返回目录...")
            back_button = page.locator('button:has-text("Q&A 目录")')
            if back_button.count() > 0:
                back_button.click()
                page.wait_for_timeout(2000)
                page.screenshot(path='c:/Users/Li Hao/Desktop/app/meetmind-landing/qa_back_screenshot.png', full_page=True)
                print("返回后截图已保存到 qa_back_screenshot.png")
        else:
            print("未找到Q&A问题")
    else:
        print("未找到投资人Q&A按钮")
        buttons = page.locator('button').all()
        print(f"页面上的按钮: {[b.text_content() for b in buttons if b.text_content()]}")
    
    browser.close()
