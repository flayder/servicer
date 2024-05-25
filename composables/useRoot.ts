export const useRoot = () => {
	const openAuth = useState('open-auth', () => false)
	const openPolicy = useState('open-policy', () => false)
	const openComplaint = useState('open-complaint', () => false)
	const openAddBlacklist =  useState('open-add-blacklist', () => false)
	const userType = useState('user-type', () => 'worker')

	return { openAuth, openPolicy, openComplaint, openAddBlacklist, userType }
}
