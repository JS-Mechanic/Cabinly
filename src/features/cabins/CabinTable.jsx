import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import {useCabins} from "./useCabins.js";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";

export function CabinTable() {
	const {isLoading, cabins} = useCabins();
	if (isLoading) return <Spinner />;
	return (
		<Menus>
			<Table columns="0.65fr 1.5fr 2.2fr 1.2fr 1.2fr 0.2fr">
				<Table.Header>
					<div></div>
					<div>Cabin</div>
					<div>Capacity</div>
					<div>Price</div>
					<div>Discount</div>
					<div></div>
				</Table.Header>
				<Table.Body data={cabins} render={cabin => <CabinRow cabin={cabin} key={cabin.id} />} />
			</Table>
		</Menus>
	);
}
