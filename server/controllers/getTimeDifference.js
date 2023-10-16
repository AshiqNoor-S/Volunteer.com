const getTimeDifference = (timestamp) => {
	const currentDate = new Date();
	const pastDate = new Date(timestamp);
	console.log(currentDate + " | " + pastDate);

	const timeDifference = currentDate - pastDate;
	const secondsDifference = Math.floor(timeDifference / 1000);

	if (secondsDifference < 60) {
		return `${secondsDifference}s ago`;
	} else if (secondsDifference < 3600) {
		const minutesDifference = Math.floor(secondsDifference / 60);
		return `${minutesDifference}m ago`;
	} else if (secondsDifference < 86400) {
		const hoursDifference = Math.floor(secondsDifference / 3600);
		return `${hoursDifference}h ago`;
	} else {
		const daysDifference = Math.floor(secondsDifference / 86400);
		return `${daysDifference}d ago`;
	}
}
// const timestamp = "2023-10-16T09:04:28.413Z";
// const timeAgo = getTimeDifference(timestamp);
// console.log(timeAgo);

export default getTimeDifference;