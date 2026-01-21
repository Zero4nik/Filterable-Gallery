// нахожу все кнопки с классом filterBtn
const filterBtn = document.querySelectorAll('.filterBtn');
//создаю массив с информацией товара
const product = [
    {id: 1, name: 'Товар 1', category: 'sites', price: 1000},
    {id: 2, name: 'Товар 2', category: 'web', price: 1000},
    {id: 3, name: 'Товар 3', category: 'design', price: 1000},
    {id: 4, name: 'Товар 4', category: 'websites', price: 1000},
    {id: 5, name: 'Товар 5', category: 'web', price: 1000},
    {id: 6, name: 'Товар 6', category: 'design', price: 1000}
];
//пишу функцию которая рендерит данную информацию
function renderProduct(array){
    //создаю новый массив мап с массивом product
    const infoMassive = array.map(function(product){
        // сразу же возвращаю с помощью return,то,что я хочу вывести
        return `<div class="product-card">
            <h3>${product.name}</h3>
            <p>Категория: ${product.category}</p>
            <p>Цена: ${product.price} руб.</p>
            <button>Купить</button>
        </div>`;
    });
    // создаю константу HTMLInfo где убираю все черточки
    const HTMLInfo = infoMassive.join('');
    //нахожу контейнер и меняю его на HTMLInfo где  вся информация
    document.querySelector('.product-container').innerHTML = HTMLInfo;
}

//создаю функцию фильтра
function filterProducts(category){
    // создаю информацию фильтра которую можно изменить
    let filterInfo;
    // если была кнопка all
    if(category === 'all'){
        // добавляет все чего нету
        filterInfo = product;
        //если категория равна кнопке вебсайтов
    } else if(category === 'websites'){
        //возвращает все,где есть сайты вейбсайты и веб
        filterInfo = product.filter(function(info){
            return info.category === 'sites' ||
                   info.category === 'websites' ||
                   info.category === 'web';
        });
        //если категория равна дизайну
    } else if(category === "design"){
        //возвращает и фильтрует только все,где есть дизайн
        filterInfo = product.filter(function(info){
            return info.category === 'design';
        });
    }
    // рендер информации где внутри есть информация про фильтр инфо
    renderProduct(filterInfo);
}

renderProduct(product);
//перебираю каждую кнопку в фильтр бтн
filterBtn.forEach(function(button){
    button.addEventListener('click', function(){
        //создаю константу которая смотрит информаицю датасет
        const category = this.dataset.category;
        console.log('Выбрана категория: ' + category);
        //выводит на то,что мы нажали
        filterProducts(category);
    });
});
//создаю константу с изображением
const galleryImages = [
    {image: 'istockphoto-1486542774-612x612.jpg'},
    {image: '98bf25959943b26e8753111906cfcbd1.jpg'},
    {image: '274e94ea948e913feaf7a421569c37d9.jpg'},
    {image: 'i (9).webp'},
    {image: 'istockphoto-1346600407-612x612.jpg'}
];
// создана функция с элементом названия 'gallery'
function createImg(gallery){
    //создана константа которая создает новый массив
    const infoGallery = gallery.map(function(info){
        //возвращает данный массив
        return `<img
            src="${info.image}"
            data-full="${info.image}"
            class="preview"
            alt="Превью">`;
    });
    
    const ImageInfo = infoGallery.join('');
    document.querySelector('.previews').innerHTML = ImageInfo;

    addPreviewClickHandlers();
}

function addPreviewClickHandlers(){
    const previews = document.querySelectorAll('.preview');
    const largeImg = document.getElementById('largeImg');
    
    previews.forEach(function(preview){
        preview.addEventListener('click', function(){
            const largeImagePath = this.dataset.full;
            largeImg.src = largeImagePath;
            
            previews.forEach(function(p){
                p.style.borderColor = 'transparent';
            });
            
            this.style.borderColor = '#4CAF50';
        });
    });
}

createImg(galleryImages);