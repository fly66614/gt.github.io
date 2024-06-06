// script.js 文件内容

// 模拟商品分类数据
const categories = [
    { id: 1, name: '玻璃杯', subcategories: ['普通玻璃杯', '保温玻璃杯'] },
    { id: 2, name: '陶瓷杯', subcategories: ['马克杯', '茶杯'] },
    { id: 3, name: '塑料杯', subcategories: ['运动水杯', '儿童水杯'] }
];

// 动态生成商品分类菜单
function generateCategoryMenu() {
    const allGoodsWrapper = document.querySelector('.all-goods-wrapper');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `
            <h3>${category.name}</h3>
            <ul>
                ${category.subcategories.map(sub => `<li>${sub}</li>`).join('')}
            </ul>
        `;
        allGoodsWrapper.appendChild(categoryDiv);
    });
}

// 模拟购物车逻辑
document.querySelector('.head-right a').addEventListener('click', function() {
    const cartContent = this.querySelector('.shopping-cart-content');
    // 使用 toggle 方法来简化显示和隐藏逻辑
    cartContent.style.display = cartContent.style.display === 'block' ? 'none' : 'block';
});

// 初始化页面
function init() {
    generateCategoryMenu();
}

// 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', init);

// 模拟图片数据
const images = [
    'img/glasses1.jpg',
    'img/glasses2.jpg',
    'img/glasses3.jpg',
    'img/glasses4.jpg',
    'img/glasses5.jpg',
    'img/glasses6.jpg',
    'img/glasses7.jpg',
    'img/glasses8.jpg',
    'img/glasses9.jpg',
    'img/glasses10.jpg',
    'img/glasses11.jpg',
    'img/glasses12.jpg',
    'img/glasses13.jpg',
    'img/glasses14.jpg',
    'img/glasses15.jpg',
    'img/glasses16.jpg',
    'img/glasses17.jpg',
    'img/glasses18.jpg'
];

// 动态添加图片到产品画廊
function addImagesToGallery(images) {
    const gallery = document.querySelector('.product-gallery');
    images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = '玻璃杯'; // 设置图片的alt文本
        gallery.appendChild(img);
    });
}

// 页面加载完成后添加图片到画廊
document.addEventListener('DOMContentLoaded', () => {
    addImagesToGallery(images);
});
