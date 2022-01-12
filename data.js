let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const iconsBox = document.getElementById("icons-container");
const selectType = document.getElementById("type-filter");


selectType.addEventListener("change", function(){
	renderIconBoxes(this.value);
});

popolateSelect(selectType);
renderIconBoxes();

function renderIconBoxes(iconType=""){

	html = "";
	let iconsClone = [...icons];
	
	if (iconType != ""){
		
		iconsClone = icons.filter((item) => {
			return iconType === item.type;
		});
	}

	iconsClone.forEach((item) => {		
		html += getIconTemplate(item);
	});

	iconsBox.innerHTML = html;
}


function getIconTemplate(postData){

	const { name, prefix, family, color } = postData;

	return `<div class="box">
				<i class="${family} ${prefix}${name}" style='color: ${getRandomColor()};'></i>
				<div class="title">${name}</div>
			</div>`;
}


function getRandomColor(){

	let hexAlphabet = "0123456789abcdef";
	let colorHex = "#";

	for (let i = 0; i < 6; i++){
		let index = getRandomNumber(0, 15);
		colorHex += hexAlphabet[index];
	}
	return colorHex;
}


function getRandomNumber(min, max){

	return Math.floor(Math.random() * (max - min)) - min;
}

function getOptions(){

	let options = [icons[0].type];

	console.log(icons.length);
	
	for (let i=1; i < icons.length; i++){
		
		if (! options.includes(icons[i].type)){
			options.push(icons[i].type);
		}
	}
	return options;
}


function popolateSelect(select){

	let html = `<option value="">all</option>`;
	let options = getOptions();
	console.log("options", options);

	options.forEach((option) => {
		html += `<option value="${option}">${option}</option>`;
	});

	select.innerHTML = html;
}