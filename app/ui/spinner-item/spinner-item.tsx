import { Spinner} from 'reactstrap';

export default function SpinnerItem() {

	return (
		<div className="menu__img flex justify-center items-center">
			<Spinner
				color="warning"
				style={{
					height: '3rem',
					width: '3rem',
				}}>
				Loading...
			</Spinner>
			<Spinner
				color="warning"
				style={{
					height: '3rem',
					width: '3rem',
				}}
				type="grow">
				Loading...
			</Spinner>
		</div>
	);
}
