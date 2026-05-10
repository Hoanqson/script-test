// ==UserScript==
// @name         Xóa Gemini Root Liên Tục
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Quét và xóa phần tử #root liên tục mỗi 0.5s cho đến khi thành công
// @author       YourName
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Săn lùng #root bắt đầu...");

    // Cứ mỗi 500ms (0.5 giây) sẽ kiểm tra một lần
    const killer = setInterval(function() {
        const root = document.getElementById('root');
        
        if (root) {
            root.remove();
            console.log("✅ Đã tìm thấy và tiêu diệt #root!");
            
            // Sau khi xóa xong thì dừng vòng lặp để tiết kiệm tài nguyên
            clearInterval(killer); 
        } else {
            console.log("⏳ Vẫn đang tìm #root...");
        }
    }, 500); 

    // Tự động dừng sau 30 giây nếu vẫn không thấy (tránh chạy vô tận nếu nút không tồn tại)
    setTimeout(() => {
        clearInterval(killer);
        console.log("🛑 Đã quá 30s, ngừng quét.");
    }, 30000);

})();
