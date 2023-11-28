/*
TODO: 
- Tạo API giả cho sidebar item. DONE ✅
- Tạo API giả cho product card. DONE ✅
- Thêm status cho card.
- Hiện thị số người tham gia khoá học.
- Mũi tên về đầu trang, cuối trang .
- Sửa logo.
- Sửa lại sidebar và responsive cho mobile. DONE ✅
*/
import sidebar from '../components/SIDEBAR/js/sidebar.js'
import card from '../components/CARD/js/card.js'

//sidebar
sidebar.sidebarLoader()
const barButton = document.querySelector('.barButton')
const xBtn = document.querySelector('.x-btn')
const closeSidebar = () => {
  const sidebar = document.querySelector('.sidebar')
  if (!sidebar.classList.contains('hidden')) {
    sidebar.classList.add('hidden')
  } else {
    sidebar.classList.remove('hidden')
  }
}
const sidebarToggle = () => {
  if (barButton) {
    barButton.onclick = () => closeSidebar()
  }
  if (xBtn) {
    xBtn.onclick = () => closeSidebar()
  }
}
sidebarToggle()
card.cardLoader()
