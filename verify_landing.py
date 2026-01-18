from playwright.sync_api import sync_playwright
import os

# 截图保存目录
output_dir = r"C:/Users/Li Hao/Desktop/webui/meetmind-landing/screenshots"
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 桌面端截图 - 使用 IPv6
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.goto('http://localhost:3008')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(3000)  # 等待更长时间
    
    # 检查页面内容
    content = page.content()
    print(f"Page content length: {len(content)}")
    print(f"Page title: {page.title()}")
    
    # 首页全屏截图
    page.screenshot(path=os.path.join(output_dir, 'landing_hero_final.png'), full_page=False)
    print("Captured: landing_hero_final.png")
    
    # 全页面截图
    page.screenshot(path=os.path.join(output_dir, 'landing_full_final.png'), full_page=True)
    print("Captured: landing_full_final.png")
    
    browser.close()
    print("Done!")
