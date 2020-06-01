let tabs = new Map([
  [1, {text: 'asdf'}],
  [2, {text: 'qwer'}],
  [3, {text: 'uipo'}],
])

// DOM Elements
// Tabs
let tabList = document.querySelector('.tabs');

// Tab Details 
let tabContent = document.querySelector('.tab-content')

// Events 
tabList.addEventListener('click', handleTabChange)

function handleChange() {
  let value = document.querySelector('#myInput').value;
}

function handleTabChange(e) {
  // get the tabs 
  // if the id matches then change the class name, else remove any existing class
  tabList = document.querySelectorAll('.tab');
  tabList.forEach(tab => {
    if(tab.id === e.target.id) {
      tab.classList.add('selected-tab');
    } else {
      tab.classList.remove('selected-tab');
    }
  })
  
  let newContent = tabs.get(parseInt(e.target.id));
  tabContent.textContent = newContent.text
}
