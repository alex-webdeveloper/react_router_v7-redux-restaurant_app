import { Spinner } from 'reactstrap';
 
export default function SpinnerMain() {
	
	return (
		<div className='pl-8'>
			<Spinner color="primary" type="grow" children={false}>
			</Spinner>
			<Spinner color="secondary" type="grow" children={false}>
			</Spinner>
			<Spinner color="success" type="grow" children={false}>
			</Spinner>
			<Spinner color="danger" type="grow" children={false}>
			</Spinner>
			<Spinner color="warning" type="grow" children={false}>
			</Spinner>
			<Spinner color="info" type="grow" children={false}>
			</Spinner>
			<Spinner color="light" type="grow" children={false}>
			</Spinner>
			<Spinner color="dark" type="grow" children={false}>
			</Spinner>
		</div>
	);
}
