const getHousehold = async () => {
  const url = 'https://63d006cc8a780ae6e681fea9.mockapi.io/api/members';
  const response = await fetch(url);
  return await response.json();
}

const render = (members) => {
  return members.map(({firstName, lastName, description, favoriteFruit}) => `
  <li>
    <h3>${firstName} ${lastName}</h3>
    <dl>
    <div>
      <dt>Description:</dt>
      <dd>${description}</dd>
    </div>
    <div>
      <dt>Favorite fruit:</dt>
      <dd>${favoriteFruit}</dd>
    </div>
  </dl>
  </li>
  `).join('');
}


document.addEventListener('DOMContentLoaded', (event) => {
  const showAddMemberFormBtn = document.getElementById('btnShowAddMemberForm');
  const addNewBtn = document.getElementById('btnAddNewMember');
  const cancelNewBtn = document.getElementById('btnCancelNew');
  const addMemberForm = document.getElementById('formAddMember');
  const memberList = document.querySelector('.member-list');
  
  (async () => {
    const loadingIndicator = document.querySelector('#loadingIndicator');
  
    try {
      const members = await getHousehold();
      document.querySelector('.member-list').innerHTML = `${render(members)}`;
    } catch (error) {
      console.log(error);
    } finally {
      loadingIndicator.setAttribute('hidden', true);
    }
  }) ();

  showAddMemberFormBtn.addEventListener('click', (event) => {
    addMemberForm.removeAttribute('hidden');
    addMemberForm.scrollIntoView({ behavior: 'smooth' });
    event.target.setAttribute('hidden', true);
  });

  addNewBtn.addEventListener('click', (event) => {
    let firstName = document.querySelector('#memberFirstName').value;
    let lastName = document.querySelector('#memberLastName').value;
    let description = document.querySelector('#memberDescription').value;
    let favoriteFruit = document.querySelector('#memberFaveFruit').value;

    event.preventDefault();

    let item = `
			<h3>${firstName} ${lastName}</h3>
			<dl>
				<div>
					<dt>Description:</dt>
					<dd>${description}</dd>
				</div>
				<div>
					<dt>Favorite fruit:</dt>
					<dd>${favoriteFruit}</dd>
				</div>
			</dl>
		`;

    let newItem = document.createElement('li');

    newItem.innerHTML = item;

    memberList.append(newItem);

    async function create(member) {
      try {
        // Create the URL
        const url = 'https://63d006cc8a780ae6e681fea9.mockapi.io/api/members';
    
        // Create the headers
        const headers = {
          'Content-Type': 'application/json',
        };
    
        // Create the POST body
        const body = JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          description: description,
          favoriteFruit: favoriteFruit,
        });
    
        // Send the POST request
        const response = await fetch(url, { method: 'POST', headers, body });
    
        // Check the response status
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        // Parse the JSON response
        const data = await response.json();
        console.log('Success:', data);
        addMemberForm.reset();
      } catch (error) {
        // Handle any errors
        console.error('Error:', error);
      }
    }
    
    create({
      firstName,
      lastName,
      description,
      favoriteFruit,
    });
  });

  cancelNewBtn.addEventListener('click', (event) => {
    addMemberForm.reset();
    addMemberForm.setAttribute('hidden', true);
    showAddMemberFormBtn.removeAttribute('hidden');
  });
});
