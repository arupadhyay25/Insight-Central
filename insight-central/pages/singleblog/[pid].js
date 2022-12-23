import React from 'react'
import {useRouter} from 'next/router';
import Singlepage from '../../Components/Singlepage/_singlepage';

export default function dynamic_route() {
	// Calling useRouter() hook
	const router = useRouter()
	const {pid} = router.query;
 
	return (
		<>
			<Singlepage
			id = {pid}
			
			/>
		</>
	)
}
