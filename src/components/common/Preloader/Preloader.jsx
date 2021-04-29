import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let Preloader = () => {
	return <div>
		<FontAwesomeIcon icon={['fas', 'spinner']} size='lg' pulse />
	</div>
}

export default Preloader;
