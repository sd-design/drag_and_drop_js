 console.log('%c Application is running', 'background: #222; color: #bada55; padding:15px')

 const items = document.querySelectorAll('.item')
 const placeholders = document.querySelectorAll('.placeholder')
 let itemId = null
 let idPlaceholder = null

items.forEach((item)=>{
	item.addEventListener('dragstart', dragStart)
	item.addEventListener('dragend', dragEnd)



for (placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragOver)
	placeholder.addEventListener('dragenter', dragEnter)
	placeholder.addEventListener('dragleave', dragleave)
	placeholder.addEventListener('drop', dragDrop)
}

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
		let placeholderDrop = document.querySelector(`[data-placeholder="${idPlaceholder}"]`)
		event.target.append(itemDrop)
	}
	
}

