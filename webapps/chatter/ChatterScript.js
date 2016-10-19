function swap()
{
	var button = document.getElementById("swapButton");
	var chatter = document.getElementById("chatter");

	if(button.innerHTML == 'view')
	{
		button.innerHTML = 'edit';
		var chatterView = document.createElement("p");
		chatterView.setAttribute('id', 'chatter');
		chatterView.innerHTML = chatter.innerHTML;
		document.getElementById("chatterForm").remove();

		document.getElementsByTagName('body')[0].appendChild(chatterView);

	}
	else
	{
		button.innerHTML = 'view';
		var form = document.createElement("form");
		form.setAttribute('method', 'post');
		form.setAttribute('action', 'Chatter');
		form.setAttribute('id', 'chatterForm');

		var textBox = document.createElement("textarea");
		textBox.setAttribute('name', 'chatterText');
		textBox.setAttribute('id', 'chatter');
		textBox.setAttribute('rows', '10');
		textBox.setAttribute('cols', '30');
		textBox.innerHTML = chatter.innerHTML;

		var submitButton = document.createElement("input");
		submitButton.setAttribute('type', 'submit');

		form.appendChild(textBox);
		form.appendChild(submitButton);

		document.getElementsByTagName('body')[0].appendChild(form);

		chatter.remove();
	}
}