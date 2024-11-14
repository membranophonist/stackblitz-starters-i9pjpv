document.addEventListener('DOMContentLoaded', (event) => {
  const showAddMemberFormBtn = document.getElementById('btnShowAddMemberForm');
  const addNewBtn = document.getElementById('btnAddNewMember');
  const cancelNewBtn = document.getElementById('btnCancelNew');
  const addMemberForm = document.getElementById('formAddMember');
  const memberList = document.querySelector('.member-list');

  showAddMemberFormBtn.addEventListener('click', (event) => {
    addMemberForm.removeAttribute('hidden');
    addMemberForm.scrollIntoView({ behavior: 'smooth' });
    event.target.setAttribute('hidden', true);
  });

  addNewBtn.addEventListener('click', (event) => {
    let memberName = document.querySelector('#memberName').value;
    let memberDesc = document.querySelector('#memberDescription').value;
    let memberFaveFruit = document.querySelector('#memberFaveFruit').value;

    event.preventDefault();

    let item = `
			<h3>${memberName}</h3>
			<dl>
				<div>
					<dt>Description:</dt>
					<dd>${memberDesc}</dd>
				</div>
				<div>
					<dt>Favorite fruit:</dt>
					<dd>${memberFaveFruit}</dd>
				</div>
			</dl>
		`;

    let newItem = document.createElement('li');

    newItem.innerHTML = item;

    memberList.append(newItem);

    addMemberForm.reset();
  });

  cancelNewBtn.addEventListener('click', (event) => {
    addMemberForm.reset();
    addMemberForm.setAttribute('hidden', true);
    showAddMemberFormBtn.removeAttribute('hidden');
  });
});
