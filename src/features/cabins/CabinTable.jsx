import Spinner from "../../ui/Spinner.jsx";
import CabinRow from "./CabinRow.jsx";
import {useCabins} from "./useCabins.js";
import Table from "../../ui/Table.jsx";
import Menus from "../../ui/Menus.jsx";
import {useSearchParams} from "react-router-dom";

export function CabinTable() {
	const {isLoading, cabins} = useCabins();
	const [searchParams] = useSearchParams();
	if (isLoading) return <Spinner />;

	const filterValue = searchParams.get("discount") || "all";

	let filteredCabins;
	if (filterValue === "all") filteredCabins = cabins;
	else if (filterValue === "no-discount")
		filteredCabins = cabins.filter(cabin => cabin.discount === 0);
	else if (filterValue === "with-discount")
		filteredCabins = cabins.filter(cabin => cabin.discount > 0);
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
				<Table.Body
					data={filteredCabins}
					render={cabin => <CabinRow cabin={cabin} key={cabin.id} />}
				/>
			</Table>
		</Menus>
	);
}
