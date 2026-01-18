from playwright.sync_api import sync_playwright
import os

# 截图保存目录
output_dir = r"C:/Users/Li Hao/Desktop/webui/meetmind-landing/public/images"
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    # 桌面端截图
    desktop_page = browser.new_page(viewport={"width": 1440, "height": 900})
    desktop_page.goto('http://localhost:3001')
    desktop_page.wait_for_load_state('networkidle')
    desktop_page.wait_for_timeout(2000)  # 等待动画完成
    
    # 首页全屏截图
    desktop_page.screenshot(path=os.path.join(output_dir, 'product_desktop_home.png'), full_page=False)
    print("Captured: product_desktop_home.png")
    
    # 移动端截图
    mobile_page = browser.new_page(viewport={"width": 390, "height": 844})
    mobile_page.goto('http://localhost:3001')
    mobile_page.wait_for_load_state('networkidle')
    mobile_page.wait_for_timeout(2000)
    
    # 移动端首页截图
    mobile_page.screenshot(path=os.path.join(output_dir, 'product_mobile_home.png'), full_page=False)
    print("Captured: product_mobile_home.png")
    
    # 家长端页面截图
    parent_page = browser.new_page(viewport={"width": 1440, "height": 900})
    parent_page.goto('http://localhost:3001/parent')
    parent_page.wait_for_load_state('networkidle')
    parent_page.wait_for_timeout(2000)
    parent_page.screenshot(path=os.path.join(output_dir, 'product_parent_dashboard.png'), full_page=False)
    print("Captured: product_parent_dashboard.png")
    
    # 移动端家长页面
    mobile_parent = browser.new_page(viewport={"width": 390, "height": 844})
    mobile_parent.goto('http://localhost:3001/parent')
    mobile_parent.wait_for_load_state('networkidle')
    mobile_parent.wait_for_timeout(2000)
    mobile_parent.screenshot(path=os.path.join(output_dir, 'product_mobile_parent.png'), full_page=False)
    print("Captured: product_mobile_parent.png")
    
    browser.close()
    print("All screenshots captured successfully!")
