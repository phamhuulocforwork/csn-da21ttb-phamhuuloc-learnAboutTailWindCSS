/*
TODO: 
- Tạo API giả cho sidebar item. DONE ✅
- Tạo API giả cho product card. 
- Thêm status cho card.
- Hiện thị số người tham gia khoá học.
- Mũi tên về đầu trang, cuối trang .
- Sửa logo.
- Sửa lại sidebar và responsive cho mobile. DONE ✅
*/
import sidebar from './components/SIDEBAR/js/sidebar.js'

//sidebar
sidebar.sidebarLoader()
const barButton = document.querySelector('.barButton')
const sidebarToggle = () => {
  barButton.onclick = () => {
    const sidebar = document.querySelector('.sidebar')
    const main = document.querySelector('.main')
    if (!sidebar.classList.contains('hidden')) {
      sidebar.classList.add('hidden')
      // main.classList.remove('hidden')
    } else {
      sidebar.classList.remove('hidden')
      // main.classList.add('hidden')
    }
  }
}
barButton.addEventListener('click', sidebarToggle())
