/*=============== DROPDOWN JS ===============*/
const showDropDown = (content, button) => {
   const dropdownContent = document.getElementById(content),
      dropdownButton = document.getElementById(button);

   dropdownButton.addEventListener('click', () => {
      dropdownContent.classList.toggle('show-dropdown');
   });
};

showDropDown('dropdown-content', 'dropdown-button');
