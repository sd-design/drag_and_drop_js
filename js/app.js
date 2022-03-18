 console.log('%c Application is running', 'background: #222; color: #bada55; padding:15px')
 const newElement = (tag, clas, id, body) => {
	const node = document.createElement(tag);
	if(clas) {
		node.classList.add(clas);
	}
	if(body){
		node.textContent = body
	}
	if(id){
		node.id = id
	}
	return node
}
 getTasks()
//  let myEl = newElement('div', 'item', 'hello-1','my text')
//  console.log(myEl)

 const items = document.querySelectorAll('.item')
 const placeholders = document.querySelectorAll('.placeholder')
 let itemId = null
 let idPlaceholder = null

items.forEach((item)=>{
	item.addEventListener('dragstart', dragStart)
	item.addEventListener('dragend', dragEnd)



	placeholders.forEach((placeholder)=> {
	placeholder.addEventListener('dragover', dragOver)
	placeholder.addEventListener('dragenter', dragEnter)
	placeholder.addEventListener('dragleave', dragleave)
	placeholder.addEventListener('drop', dragDrop)
})

})


function dragStart(event){
	//console.log('drag start', event.target)
	event.target.classList.add('hold')
	itemId = event.target.dataset.id
	setTimeout(() => {
		event.target.classList.add('d-none')
	}, 0);
	
	}
	
	function dragEnd(event){
		//console.log('drag end')
		event.target.classList.remove('hold')
		event.target.classList.remove('d-none')
	}
	
	function dragOver(event){
		event.preventDefault()
	}
	
	function dragEnter(event){
		event.preventDefault()
		event.target.classList.add('hovered')
		idPlaceholder = event.target.dataset.placeholder
	}
	
	function dragleave(event){
		event.target.classList.remove('hovered')
	}
	

function dragDrop(event){
	let itemDrop = document.querySelector(`[data-id="${itemId}"]`)
	
	//console.log(itemDrop)
	event.target.classList.remove('hovered')
	if(idPlaceholder != null && idPlaceholder != undefined){
		console.log('placeholder: ', idPlaceholder, 'item ', itemId)
		let placeholderDrop = document.querySelector(`[data-placeholder="${idPlaceholder}"]`)
		placeholderDrop.append(itemDrop)
	}
	
}

function getTasks(){
	let myTasks;
	fetch('http://localhost:3000/tasks').then(response=>{
		if(response.ok){
			return response.json();
		}
		throw new Error('Request failed');
	},
	networkError => {
		console.log(networkError.message);

	}).then(jsonResponse => {
		showTasks(jsonResponse);
	})

}

function showTasks(tasks){
	tasks.forEach((task)=>{
//console.log(task.id, task.text)
		console.log(newElement('div', 'item', task.id, task.text))
	})

}
const checkBox = () => {
	console.log(document.querySelector('#my-checkbox').checked);
}

document.querySelector('#my-checkbox').addEventListener('click',checkBox)



