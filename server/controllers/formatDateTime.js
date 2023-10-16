const formatDateTime = (timestamp) => {
	const options = { month: 'short', day: 'numeric', year: 'numeric' };
	const date = new Date(timestamp);
	const formattedDate = date.toLocaleDateString('en-US', options);
	
	const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }).split(' ').join('');

	// console.log(`${time} · ${formattedDate}`);

	return `${time} · ${formattedDate}`;
}


export default formatDateTime;