from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    
    # 截取完整页面
    page.screenshot(path='screenshots/landing_full.png', full_page=True)
    print('Full page screenshot saved to screenshots/landing_full.png')
    
    # 截取首屏
    page.screenshot(path='screenshots/landing_hero.png')
    print('Hero screenshot saved to screenshots/landing_hero.png')
    
    browser.close()
